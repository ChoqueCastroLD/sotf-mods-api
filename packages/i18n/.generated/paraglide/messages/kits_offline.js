/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_OfflineInputs */

const en_kits_offline = /** @type {(inputs: Kits_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You’re offline. Reconnect and try again.`)
};

const es_kits_offline = /** @type {(inputs: Kits_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estás sin conexión. Vuelve a conectarte e inténtalo de nuevo.`)
};

const de_kits_offline = /** @type {(inputs: Kits_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du bist offline. Verbinde dich neu und versuch es noch einmal.`)
};

const fr_kits_offline = /** @type {(inputs: Kits_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous êtes hors ligne. Reconnectez-vous et réessayez.`)
};

const it_kits_offline = /** @type {(inputs: Kits_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sei offline. Riconnettiti e riprova.`)
};

const nl_kits_offline = /** @type {(inputs: Kits_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je bent offline. Maak opnieuw verbinding en probeer het nog eens.`)
};

const pl_kits_offline = /** @type {(inputs: Kits_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jesteś offline. Połącz się ponownie i spróbuj jeszcze raz.`)
};

const pt_kits_offline = /** @type {(inputs: Kits_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você está offline. Reconecte-se e tente de novo.`)
};

const ru_kits_offline = /** @type {(inputs: Kits_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет подключения. Подключитесь и попробуйте снова.`)
};

const sv_kits_offline = /** @type {(inputs: Kits_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du är offline. Anslut igen och försök på nytt.`)
};

const tr_kits_offline = /** @type {(inputs: Kits_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çevrimdışısın. Yeniden bağlanıp tekrar dene.`)
};

const zh_kits_offline = /** @type {(inputs: Kits_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你已离线，请重新连接后再试。`)
};

const ja_kits_offline = /** @type {(inputs: Kits_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`オフラインです。再接続してからもう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "You’re offline. Reconnect and try again." |
*
* @param {Kits_OfflineInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_offline = /** @type {((inputs?: Kits_OfflineInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_OfflineInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_offline(inputs)
	if (locale === "de") return de_kits_offline(inputs)
	if (locale === "fr") return fr_kits_offline(inputs)
	if (locale === "it") return it_kits_offline(inputs)
	if (locale === "nl") return nl_kits_offline(inputs)
	if (locale === "pl") return pl_kits_offline(inputs)
	if (locale === "pt") return pt_kits_offline(inputs)
	if (locale === "ru") return ru_kits_offline(inputs)
	if (locale === "sv") return sv_kits_offline(inputs)
	if (locale === "tr") return tr_kits_offline(inputs)
	if (locale === "zh") return zh_kits_offline(inputs)
	if (locale === "ja") return ja_kits_offline(inputs)
	return en_kits_offline(inputs)
});
