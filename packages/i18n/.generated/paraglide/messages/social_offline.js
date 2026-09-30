/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_OfflineInputs */

const en_social_offline = /** @type {(inputs: Social_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You’re offline. What you see may be out of date.`)
};

const es_social_offline = /** @type {(inputs: Social_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estás sin conexión. Lo que ves puede estar desactualizado.`)
};

const de_social_offline = /** @type {(inputs: Social_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du bist offline. Was du siehst, ist vielleicht nicht aktuell.`)
};

const fr_social_offline = /** @type {(inputs: Social_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous êtes hors ligne. Ce que vous voyez n’est peut-être pas à jour.`)
};

const it_social_offline = /** @type {(inputs: Social_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sei offline. Quello che vedi potrebbe non essere aggiornato.`)
};

const nl_social_offline = /** @type {(inputs: Social_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je bent offline. Wat je ziet is misschien niet actueel.`)
};

const pl_social_offline = /** @type {(inputs: Social_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jesteś offline. To, co widzisz, może być nieaktualne.`)
};

const pt_social_offline = /** @type {(inputs: Social_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você está off-line. O que você vê pode estar desatualizado.`)
};

const ru_social_offline = /** @type {(inputs: Social_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы офлайн. Показанные данные могут быть устаревшими.`)
};

const sv_social_offline = /** @type {(inputs: Social_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du är offline. Det du ser kanske inte är aktuellt.`)
};

const tr_social_offline = /** @type {(inputs: Social_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çevrimdışısın. Gördüklerin güncel olmayabilir.`)
};

const zh_social_offline = /** @type {(inputs: Social_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你已离线，看到的内容可能不是最新的。`)
};

const ja_social_offline = /** @type {(inputs: Social_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`オフラインです。表示中の内容は最新でない可能性があります。`)
};

/**
* | output |
* | --- |
* | "You’re offline. What you see may be out of date." |
*
* @param {Social_OfflineInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_offline = /** @type {((inputs?: Social_OfflineInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_OfflineInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_offline(inputs)
	if (locale === "de") return de_social_offline(inputs)
	if (locale === "fr") return fr_social_offline(inputs)
	if (locale === "it") return it_social_offline(inputs)
	if (locale === "nl") return nl_social_offline(inputs)
	if (locale === "pl") return pl_social_offline(inputs)
	if (locale === "pt") return pt_social_offline(inputs)
	if (locale === "ru") return ru_social_offline(inputs)
	if (locale === "sv") return sv_social_offline(inputs)
	if (locale === "tr") return tr_social_offline(inputs)
	if (locale === "zh") return zh_social_offline(inputs)
	if (locale === "ja") return ja_social_offline(inputs)
	return en_social_offline(inputs)
});
