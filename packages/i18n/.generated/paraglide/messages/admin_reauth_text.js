/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Reauth_TextInputs */

const en_admin_reauth_text = /** @type {(inputs: Admin_Reauth_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Admin tools need a sign-in from the last 12 hours. Sign in again and you’ll come straight back here.`)
};

const es_admin_reauth_text = /** @type {(inputs: Admin_Reauth_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las herramientas de administración necesitan un inicio de sesión de las últimas 12 horas. Vuelve a iniciar sesión y regresarás aquí directamente.`)
};

const de_admin_reauth_text = /** @type {(inputs: Admin_Reauth_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Admin-Werkzeuge brauchen eine Anmeldung aus den letzten 12 Stunden. Melde dich erneut an, dann kommst du direkt hierher zurück.`)
};

const fr_admin_reauth_text = /** @type {(inputs: Admin_Reauth_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les outils d’administration exigent une connexion de moins de 12 heures. Reconnectez-vous et vous reviendrez directement ici.`)
};

const it_admin_reauth_text = /** @type {(inputs: Admin_Reauth_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gli strumenti di amministrazione richiedono un accesso nelle ultime 12 ore. Accedi di nuovo e tornerai direttamente qui.`)
};

const nl_admin_reauth_text = /** @type {(inputs: Admin_Reauth_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De beheertools vragen een aanmelding van de afgelopen 12 uur. Meld je opnieuw aan en je komt meteen hier terug.`)
};

const pl_admin_reauth_text = /** @type {(inputs: Admin_Reauth_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Narzędzia administracyjne wymagają logowania z ostatnich 12 godzin. Zaloguj się ponownie, a wrócisz prosto tutaj.`)
};

const pt_admin_reauth_text = /** @type {(inputs: Admin_Reauth_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As ferramentas de administração exigem um login feito nas últimas 12 horas. Entre de novo e você volta direto para cá.`)
};

const ru_admin_reauth_text = /** @type {(inputs: Admin_Reauth_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Для инструментов администрирования нужен вход не старше 12 часов. Войдите снова, и вы сразу вернётесь сюда.`)
};

const sv_admin_reauth_text = /** @type {(inputs: Admin_Reauth_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adminverktygen kräver en inloggning från de senaste 12 timmarna. Logga in igen så kommer du direkt tillbaka hit.`)
};

const tr_admin_reauth_text = /** @type {(inputs: Admin_Reauth_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yönetim araçları son 12 saat içinde yapılmış bir giriş ister. Yeniden giriş yap, doğrudan buraya dönersin.`)
};

const zh_admin_reauth_text = /** @type {(inputs: Admin_Reauth_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`管理工具需要 12 小时内的登录。重新登录后会直接回到这里。`)
};

const ja_admin_reauth_text = /** @type {(inputs: Admin_Reauth_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`管理ツールには 12 時間以内のサインインが必要です。もう一度サインインすると、ここに戻ってきます。`)
};

/**
* | output |
* | --- |
* | "Admin tools need a sign-in from the last 12 hours. Sign in again and you’ll come straight back here." |
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
