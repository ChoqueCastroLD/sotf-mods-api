/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Login_Turnstile_HintInputs */

const en_auth_login_turnstile_hint = /** @type {(inputs: Auth_Login_Turnstile_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Complete the quick security check below, then sign in again.`)
};

const es_auth_login_turnstile_hint = /** @type {(inputs: Auth_Login_Turnstile_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Completa la comprobación de seguridad de abajo y vuelve a iniciar sesión.`)
};

const de_auth_login_turnstile_hint = /** @type {(inputs: Auth_Login_Turnstile_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schließ die kurze Sicherheitsprüfung unten ab und melde dich dann erneut an.`)
};

const fr_auth_login_turnstile_hint = /** @type {(inputs: Auth_Login_Turnstile_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Effectuez la vérification de sécurité ci-dessous, puis reconnectez-vous.`)
};

const it_auth_login_turnstile_hint = /** @type {(inputs: Auth_Login_Turnstile_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Completa il breve controllo di sicurezza qui sotto, poi accedi di nuovo.`)
};

const nl_auth_login_turnstile_hint = /** @type {(inputs: Auth_Login_Turnstile_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rond de korte beveiligingscheck hieronder af en log dan opnieuw in.`)
};

const pl_auth_login_turnstile_hint = /** @type {(inputs: Auth_Login_Turnstile_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przejdź krótką kontrolę bezpieczeństwa poniżej, a potem zaloguj się ponownie.`)
};

const pt_auth_login_turnstile_hint = /** @type {(inputs: Auth_Login_Turnstile_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conclua a verificação de segurança abaixo e entre de novo.`)
};

const ru_auth_login_turnstile_hint = /** @type {(inputs: Auth_Login_Turnstile_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пройдите короткую проверку безопасности ниже и войдите снова.`)
};

const sv_auth_login_turnstile_hint = /** @type {(inputs: Auth_Login_Turnstile_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gör den korta säkerhetskontrollen nedan och logga sedan in igen.`)
};

const tr_auth_login_turnstile_hint = /** @type {(inputs: Auth_Login_Turnstile_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aşağıdaki kısa güvenlik kontrolünü tamamla, sonra tekrar giriş yap.`)
};

const zh_auth_login_turnstile_hint = /** @type {(inputs: Auth_Login_Turnstile_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请完成下方的安全验证，然后重新登录。`)
};

const ja_auth_login_turnstile_hint = /** @type {(inputs: Auth_Login_Turnstile_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下の簡単なセキュリティチェックを完了してから、もう一度ログインしてください。`)
};

/**
* | output |
* | --- |
* | "Complete the quick security check below, then sign in again." |
*
* @param {Auth_Login_Turnstile_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_login_turnstile_hint = /** @type {((inputs?: Auth_Login_Turnstile_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Login_Turnstile_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_login_turnstile_hint(inputs)
	if (locale === "de") return de_auth_login_turnstile_hint(inputs)
	if (locale === "fr") return fr_auth_login_turnstile_hint(inputs)
	if (locale === "it") return it_auth_login_turnstile_hint(inputs)
	if (locale === "nl") return nl_auth_login_turnstile_hint(inputs)
	if (locale === "pl") return pl_auth_login_turnstile_hint(inputs)
	if (locale === "pt") return pt_auth_login_turnstile_hint(inputs)
	if (locale === "ru") return ru_auth_login_turnstile_hint(inputs)
	if (locale === "sv") return sv_auth_login_turnstile_hint(inputs)
	if (locale === "tr") return tr_auth_login_turnstile_hint(inputs)
	if (locale === "zh") return zh_auth_login_turnstile_hint(inputs)
	if (locale === "ja") return ja_auth_login_turnstile_hint(inputs)
	return en_auth_login_turnstile_hint(inputs)
});
