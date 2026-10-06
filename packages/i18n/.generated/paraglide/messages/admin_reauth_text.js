/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Reauth_TextInputs */

const en_admin_reauth_text = /** @type {(inputs: Admin_Reauth_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Admin tools need a login from the last 12 hours. Log in again to continue.`)
};

const es_admin_reauth_text = /** @type {(inputs: Admin_Reauth_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las herramientas de administración necesitan un inicio de sesión de las últimas 12 horas. Vuelve a iniciar sesión para continuar.`)
};

const de_admin_reauth_text = /** @type {(inputs: Admin_Reauth_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Admin-Werkzeuge brauchen eine Anmeldung aus den letzten 12 Stunden. Melde dich erneut an, um fortzufahren.`)
};

const fr_admin_reauth_text = /** @type {(inputs: Admin_Reauth_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les outils d’administration exigent une connexion de moins de 12 heures. Reconnectez-vous pour continuer.`)
};

const it_admin_reauth_text = /** @type {(inputs: Admin_Reauth_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gli strumenti di amministrazione richiedono un accesso nelle ultime 12 ore. Accedi di nuovo per continuare.`)
};

const nl_admin_reauth_text = /** @type {(inputs: Admin_Reauth_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De beheertools vragen een login van de afgelopen 12 uur. Log opnieuw in om verder te gaan.`)
};

const pl_admin_reauth_text = /** @type {(inputs: Admin_Reauth_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Narzędzia administracyjne wymagają logowania z ostatnich 12 godzin. Zaloguj się ponownie, aby kontynuować.`)
};

const pt_admin_reauth_text = /** @type {(inputs: Admin_Reauth_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As ferramentas de administração exigem um login feito nas últimas 12 horas. Entre de novo para continuar.`)
};

const ru_admin_reauth_text = /** @type {(inputs: Admin_Reauth_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Для инструментов администрирования нужен вход не старше 12 часов. Войдите снова, чтобы продолжить.`)
};

const sv_admin_reauth_text = /** @type {(inputs: Admin_Reauth_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adminverktygen kräver en inloggning från de senaste 12 timmarna. Logga in igen för att fortsätta.`)
};

const tr_admin_reauth_text = /** @type {(inputs: Admin_Reauth_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yönetim araçları son 12 saat içinde yapılmış bir giriş ister. Devam etmek için yeniden giriş yap.`)
};

const zh_admin_reauth_text = /** @type {(inputs: Admin_Reauth_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`管理工具需要 12 小时内的登录。请重新登录后继续。`)
};

const ja_admin_reauth_text = /** @type {(inputs: Admin_Reauth_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`管理ツールには 12 時間以内のログインが必要です。続けるにはもう一度ログインしてください。`)
};

/**
* | output |
* | --- |
* | "Admin tools need a login from the last 12 hours. Log in again to continue." |
*
* @param {Admin_Reauth_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_reauth_text = /** @type {((inputs?: Admin_Reauth_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Reauth_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_reauth_text(inputs)
	if (locale === "de") return de_admin_reauth_text(inputs)
	if (locale === "fr") return fr_admin_reauth_text(inputs)
	if (locale === "it") return it_admin_reauth_text(inputs)
	if (locale === "nl") return nl_admin_reauth_text(inputs)
	if (locale === "pl") return pl_admin_reauth_text(inputs)
	if (locale === "pt") return pt_admin_reauth_text(inputs)
	if (locale === "ru") return ru_admin_reauth_text(inputs)
	if (locale === "sv") return sv_admin_reauth_text(inputs)
	if (locale === "tr") return tr_admin_reauth_text(inputs)
	if (locale === "zh") return zh_admin_reauth_text(inputs)
	if (locale === "ja") return ja_admin_reauth_text(inputs)
	return en_admin_reauth_text(inputs)
});
