// Terminal Login Script
// Handles multi-step Claude.ai authentication with design system scope authorization

class TerminalLogin {
    constructor() {
        this.currentStep = 'email';
        this.userData = {
            email: '',
            password: '',
            twoFactor: '',
            scopes: ['design:read', 'design:write', 'workflows:execute']
        };
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.showStep('email');
        this.addTerminalLine('>>> Ready for authentication');
    }

    setupEventListeners() {
        const nextBtn = document.getElementById('nextBtn');
        const submitBtn = document.getElementById('submitBtn');
        const backBtn = document.getElementById('backBtn');
        const retryBtn = document.getElementById('retryBtn');
        const copyTokenBtn = document.getElementById('copyTokenBtn');
        const homeBtn = document.getElementById('homeBtn');

        // Email input - Enter to proceed
        document.getElementById('emailInput')?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.validateEmail();
        });

        // Password input - Enter to proceed
        document.getElementById('passwordInput')?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.validatePassword();
        });

        // 2FA input - Enter to submit
        document.getElementById('twoFactorInput')?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.validate2FA();
        });

        // Button listeners
        nextBtn?.addEventListener('click', () => {
            if (this.currentStep === 'email') this.validateEmail();
            else if (this.currentStep === 'password') this.validatePassword();
        });

        submitBtn?.addEventListener('click', () => this.submitAuthorization());
        backBtn?.addEventListener('click', () => this.goBack());
        retryBtn?.addEventListener('click', () => this.retry());
        copyTokenBtn?.addEventListener('click', () => this.copyToken());
        homeBtn?.addEventListener('click', () => this.goHome());
    }

    showStep(step) {
        this.currentStep = step;
        
        // Hide all groups
        document.getElementById('emailGroup').classList.add('hidden');
        document.getElementById('passwordGroup').classList.add('hidden');
        document.getElementById('twoFactorGroup').classList.add('hidden');
        document.getElementById('scopesGroup').classList.add('hidden');
        
        // Hide all buttons
        document.getElementById('nextBtn').style.display = 'none';
        document.getElementById('submitBtn').style.display = 'none';
        document.getElementById('backBtn').style.display = 'none';
        document.getElementById('retryBtn').style.display = 'none';

        // Show relevant step
        if (step === 'email') {
            document.getElementById('emailGroup').classList.remove('hidden');
            document.getElementById('nextBtn').style.display = 'inline-block';
            document.getElementById('emailInput').focus();
            this.addTerminalLine('>>> Enter your Claude.ai email address');
        } else if (step === 'password') {
            document.getElementById('passwordGroup').classList.remove('hidden');
            document.getElementById('nextBtn').style.display = 'inline-block';
            document.getElementById('backBtn').style.display = 'inline-block';
            document.getElementById('passwordInput').focus();
            this.addTerminalLine(`>>> Email confirmed: ${this.userData.email}`);
            this.addTerminalLine('>>> Enter your Claude.ai password');
        } else if (step === 'twoFactor') {
            document.getElementById('twoFactorGroup').classList.remove('hidden');
            document.getElementById('nextBtn').style.display = 'inline-block';
            document.getElementById('backBtn').style.display = 'inline-block';
            document.getElementById('twoFactorInput').focus();
            this.addTerminalLine('>>> Two-factor authentication enabled');
            this.addTerminalLine('>>> Enter 6-digit code from authenticator app');
        } else if (step === 'scopes') {
            document.getElementById('scopesGroup').classList.remove('hidden');
            document.getElementById('submitBtn').style.display = 'inline-block';
            document.getElementById('backBtn').style.display = 'inline-block';
            this.addTerminalLine('>>> Password verified');
            this.addTerminalLine('>>> Select scopes for design system access');
        }

        this.clearStatus();
    }

    validateEmail() {
        const email = document.getElementById('emailInput').value.trim();
        
        if (!email) {
            this.showStatus('Email is required', 'error');
            return;
        }

        if (!this.isValidEmail(email)) {
            this.showStatus('Invalid email format', 'error');
            return;
        }

        this.userData.email = email;
        this.showLoading('Verifying email...');
        
        setTimeout(() => {
            this.hideLoading();
            this.addTerminalLine(`$ email ${email}`);
            this.addTerminalLine('>>> Email verified successfully');
            this.showStep('password');
        }, 1200);
    }

    validatePassword() {
        const password = document.getElementById('passwordInput').value;

        if (!password) {
            this.showStatus('Password is required', 'error');
            return;
        }

        if (password.length < 6) {
            this.showStatus('Password must be at least 6 characters', 'error');
            return;
        }

        this.userData.password = password;
        this.showLoading('Authenticating credentials...');

        setTimeout(() => {
            this.hideLoading();
            this.addTerminalLine('$ password ••••••••••••');
            this.addTerminalLine('>>> Credentials validated');

            // Simulate 2FA check (in real scenario, server decides)
            const requires2FA = Math.random() > 0.3; // 70% chance of 2FA
            
            if (requires2FA) {
                this.addTerminalLine('>>> Two-factor authentication required');
                this.showStep('twoFactor');
            } else {
                this.addTerminalLine('>>> Proceeding to authorization');
                this.showStep('scopes');
            }
        }, 1500);
    }

    validate2FA() {
        const code = document.getElementById('twoFactorInput').value;

        if (!code) {
            this.showStatus('2FA code is required', 'error');
            return;
        }

        if (!/^\d{6}$/.test(code)) {
            this.showStatus('2FA code must be 6 digits', 'error');
            return;
        }

        this.userData.twoFactor = code;
        this.showLoading('Validating 2FA code...');

        setTimeout(() => {
            this.hideLoading();
            this.addTerminalLine('$ 2fa-code ••••••');
            this.addTerminalLine('>>> 2FA verification successful');
            this.addTerminalLine('>>> Proceeding to authorization');
            this.showStep('scopes');
        }, 1000);
    }

    submitAuthorization() {
        // Get selected scopes
        const checkboxes = document.querySelectorAll('input[name="scope"]:checked');
        const scopes = Array.from(checkboxes).map(cb => cb.value);

        if (scopes.length === 0) {
            this.showStatus('Select at least one scope', 'error');
            return;
        }

        this.userData.scopes = scopes;
        this.showLoading('Authorizing design system access...');

        setTimeout(() => {
            this.hideLoading();
            this.addTerminalLine(`$ authorize-scopes ${scopes.join(' ')}`);
            this.addTerminalLine('>>> Design system access authorized');
            this.addTerminalLine('>>> Generating access token...');
            
            setTimeout(() => {
                this.showSuccessState();
            }, 800);
        }, 2000);
    }

    goBack() {
        if (this.currentStep === 'password') {
            document.getElementById('passwordInput').value = '';
            this.showStep('email');
        } else if (this.currentStep === 'twoFactor') {
            document.getElementById('twoFactorInput').value = '';
            this.showStep('password');
        } else if (this.currentStep === 'scopes') {
            this.showStep(this.userData.twoFactor ? 'twoFactor' : 'password');
        }
    }

    retry() {
        location.reload();
    }

    showLoading(text = 'Authenticating...') {
        document.getElementById('loadingText').textContent = text;
        document.getElementById('loadingSpinner').classList.remove('hidden');
    }

    hideLoading() {
        document.getElementById('loadingSpinner').classList.add('hidden');
    }

    showStatus(message, type = 'info') {
        const statusEl = document.getElementById('statusMessage');
        statusEl.textContent = message;
        statusEl.className = `status-message ${type}`;
    }

    clearStatus() {
        const statusEl = document.getElementById('statusMessage');
        statusEl.classList.add('hidden');
        statusEl.textContent = '';
    }

    addTerminalLine(text) {
        const output = document.getElementById('terminalOutput');
        const line = document.createElement('div');
        line.className = 'line';
        line.innerHTML = `<span class="text">${this.escapeHtml(text)}</span>`;
        output.appendChild(line);
        output.scrollTop = output.scrollHeight;
    }

    showSuccessState() {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('successState').classList.remove('hidden');
        
        // Generate mock token (in production, get from server)
        const token = this.generateMockToken();
        document.getElementById('tokenDisplay').textContent = token;
    }

    generateMockToken() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let token = 'claude_';
        for (let i = 0; i < 40; i++) {
            token += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return token;
    }

    copyToken() {
        const token = document.getElementById('tokenDisplay').textContent;
        navigator.clipboard.writeText(token).then(() => {
            const btn = document.getElementById('copyTokenBtn');
            const originalText = btn.textContent;
            btn.textContent = '✓ Copied!';
            btn.style.borderColor = '#22c55e';
            btn.style.color = '#22c55e';
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.borderColor = '';
                btn.style.color = '';
            }, 2000);
        });
    }

    goHome() {
        window.location.href = 'index.html';
    }

    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    new TerminalLogin();
});
