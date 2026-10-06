/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Twofactor_ExpiredInputs */

const en_auth_twofactor_expired = /** @type {(inputs: Auth_Twofactor_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This step expired. Log in again to get a new one.`)
};

const es_auth_twofactor_expired = /** @type {(inputs: Auth_Twofactor_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este paso ha caducado. Inicia sesión de nuevo para obtener otro.`)
};

const de_auth_twofactor_expired = /** @type {(inputs: Auth_Twofactor_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Schritt ist abgelaufen. Melde dich erneut an, um einen neuen zu erhalten.`)
};

const fr_auth_twofactor_expired = /** @type {(inputs: Auth_Twofactor_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cette étape a expiré. Reconnectez-vous pour en obtenir une nouvelle.`)
};

const it_auth_twofactor_expired = /** @type {(inputs: Auth_Twofactor_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questo passaggio è scaduto. Accedi di nuovo per ottenerne uno nuovo.`)
};

const nl_auth_twofactor_expired = /** @type {(inputs: Auth_Twofactor_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze stap is verlopen. Log opnieuw in om een nieuwe te krijgen.`)
};

const pl_auth_twofactor_expired = /** @type {(inputs: Auth_Twofactor_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten krok wygasł. Zaloguj się ponownie, aby otrzymać nowy.`)
};

const pt_auth_twofactor_expired = /** @type {(inputs: Auth_Twofactor_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta etapa expirou. Entre novamente para obter uma nova.`)
};

const ru_auth_twofactor_expired = /** @type {(inputs: Auth_Twofactor_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Этот шаг истёк. Войдите снова, чтобы получить новый.`)
};

const sv_auth_twofactor_expired = /** @type {(inputs: Auth_Twofactor_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det här steget har gått ut. Logga in igen för att få ett nytt.`)
};

const tr_auth_twofactor_expired = /** @type {(inputs: Auth_Twofactor_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu adımın süresi doldu. Yenisini almak için tekrar giriş yap.`)
};

const zh_auth_twofactor_expired = /** @type {(inputs: Auth_Twofactor_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此步骤已过期，请重新登录以获取新的验证步骤。`)
};

const ja_auth_twofactor_expired = /** @type {(inputs: Auth_Twofactor_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このステップの有効期限が切れました。もう一度ログインして新しいものを取得してください。`)
};

/**
* | output |
* | --- |
* | "This step expired. Log in again to get a new one." |
*
* @param {Auth_Twofactor_ExpiredInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_twofactor_expired = /** @type {((inputs?: Auth_Twofactor_ExpiredInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Twofactor_ExpiredInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_twofactor_expired(inputs)
	if (locale === "de") return de_auth_twofactor_expired(inputs)
	if (locale === "fr") return fr_auth_twofactor_expired(inputs)
	if (locale === "it") return it_auth_twofactor_expired(inputs)
	if (locale === "nl") return nl_auth_twofactor_expired(inputs)
	if (locale === "pl") return pl_auth_twofactor_expired(inputs)
	if (locale === "pt") return pt_auth_twofactor_expired(inputs)
	if (locale === "ru") return ru_auth_twofactor_expired(inputs)
	if (locale === "sv") return sv_auth_twofactor_expired(inputs)
	if (locale === "tr") return tr_auth_twofactor_expired(inputs)
	if (locale === "zh") return zh_auth_twofactor_expired(inputs)
	if (locale === "ja") return ja_auth_twofactor_expired(inputs)
	return en_auth_twofactor_expired(inputs)
});
