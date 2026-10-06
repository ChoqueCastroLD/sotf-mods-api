/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Reauth_TextInputs */

const en_ranger_reauth_text = /** @type {(inputs: Ranger_Reauth_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderation actions need a login from the last 12 hours. Log in again to continue.`)
};

const es_ranger_reauth_text = /** @type {(inputs: Ranger_Reauth_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las acciones de moderación necesitan un inicio de sesión de las últimas 12 horas. Vuelve a iniciar sesión para continuar.`)
};

const de_ranger_reauth_text = /** @type {(inputs: Ranger_Reauth_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderationsaktionen brauchen eine Anmeldung aus den letzten 12 Stunden. Melde dich erneut an, um fortzufahren.`)
};

const fr_ranger_reauth_text = /** @type {(inputs: Ranger_Reauth_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les actions de modération demandent une connexion datant de moins de 12 heures. Reconnectez-vous pour continuer.`)
};

const it_ranger_reauth_text = /** @type {(inputs: Ranger_Reauth_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le azioni di moderazione richiedono un accesso nelle ultime 12 ore. Accedi di nuovo per continuare.`)
};

const nl_ranger_reauth_text = /** @type {(inputs: Ranger_Reauth_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderatie-acties vereisen een login van de afgelopen 12 uur. Log opnieuw in om verder te gaan.`)
};

const pl_ranger_reauth_text = /** @type {(inputs: Ranger_Reauth_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Działania moderacyjne wymagają logowania z ostatnich 12 godzin. Zaloguj się ponownie, aby kontynuować.`)
};

const pt_ranger_reauth_text = /** @type {(inputs: Ranger_Reauth_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ações de moderação exigem um login feito nas últimas 12 horas. Entre de novo para continuar.`)
};

const ru_ranger_reauth_text = /** @type {(inputs: Ranger_Reauth_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Для действий модерации нужен вход не старше 12 часов. Войдите снова, чтобы продолжить.`)
};

const sv_ranger_reauth_text = /** @type {(inputs: Ranger_Reauth_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modereringsåtgärder kräver en inloggning från de senaste 12 timmarna. Logga in igen för att fortsätta.`)
};

const tr_ranger_reauth_text = /** @type {(inputs: Ranger_Reauth_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderasyon işlemleri son 12 saat içinde yapılmış bir giriş gerektirir. Devam etmek için yeniden giriş yap.`)
};

const zh_ranger_reauth_text = /** @type {(inputs: Ranger_Reauth_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`审核操作需要 12 小时内的登录。请重新登录后继续。`)
};

const ja_ranger_reauth_text = /** @type {(inputs: Ranger_Reauth_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`モデレーション操作には 12 時間以内のログインが必要です。続けるにはもう一度ログインしてください。`)
};

/**
* | output |
* | --- |
* | "Moderation actions need a login from the last 12 hours. Log in again to continue." |
*
* @param {Ranger_Reauth_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_reauth_text = /** @type {((inputs?: Ranger_Reauth_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Reauth_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_reauth_text(inputs)
	if (locale === "de") return de_ranger_reauth_text(inputs)
	if (locale === "fr") return fr_ranger_reauth_text(inputs)
	if (locale === "it") return it_ranger_reauth_text(inputs)
	if (locale === "nl") return nl_ranger_reauth_text(inputs)
	if (locale === "pl") return pl_ranger_reauth_text(inputs)
	if (locale === "pt") return pt_ranger_reauth_text(inputs)
	if (locale === "ru") return ru_ranger_reauth_text(inputs)
	if (locale === "sv") return sv_ranger_reauth_text(inputs)
	if (locale === "tr") return tr_ranger_reauth_text(inputs)
	if (locale === "zh") return zh_ranger_reauth_text(inputs)
	if (locale === "ja") return ja_ranger_reauth_text(inputs)
	return en_ranger_reauth_text(inputs)
});
