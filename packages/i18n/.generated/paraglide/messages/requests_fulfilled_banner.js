/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Fulfilled_BannerInputs */

const en_requests_fulfilled_banner = /** @type {(inputs: Requests_Fulfilled_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fulfilled: the mod is published.`)
};

const es_requests_fulfilled_banner = /** @type {(inputs: Requests_Fulfilled_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cumplida: el mod ya está publicado.`)
};

const de_requests_fulfilled_banner = /** @type {(inputs: Requests_Fulfilled_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erfüllt: Der Mod ist veröffentlicht.`)
};

const fr_requests_fulfilled_banner = /** @type {(inputs: Requests_Fulfilled_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réalisée : le mod est publié.`)
};

const it_requests_fulfilled_banner = /** @type {(inputs: Requests_Fulfilled_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Realizzata: il mod è pubblicato.`)
};

const nl_requests_fulfilled_banner = /** @type {(inputs: Requests_Fulfilled_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vervuld: de mod is gepubliceerd.`)
};

const pl_requests_fulfilled_banner = /** @type {(inputs: Requests_Fulfilled_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zrealizowane: mod został opublikowany.`)
};

const pt_requests_fulfilled_banner = /** @type {(inputs: Requests_Fulfilled_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atendido: o mod foi publicado.`)
};

const ru_requests_fulfilled_banner = /** @type {(inputs: Requests_Fulfilled_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выполнено: мод опубликован.`)
};

const sv_requests_fulfilled_banner = /** @type {(inputs: Requests_Fulfilled_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uppfylld: modden är publicerad.`)
};

const tr_requests_fulfilled_banner = /** @type {(inputs: Requests_Fulfilled_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tamamlandı: mod yayımlandı.`)
};

const zh_requests_fulfilled_banner = /** @type {(inputs: Requests_Fulfilled_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已完成：模组已发布。`)
};

const ja_requests_fulfilled_banner = /** @type {(inputs: Requests_Fulfilled_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`達成済み: MOD が公開されました。`)
};

/**
* | output |
* | --- |
* | "Fulfilled: the mod is published." |
*
* @param {Requests_Fulfilled_BannerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_fulfilled_banner = /** @type {((inputs?: Requests_Fulfilled_BannerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Fulfilled_BannerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_fulfilled_banner(inputs)
	if (locale === "de") return de_requests_fulfilled_banner(inputs)
	if (locale === "fr") return fr_requests_fulfilled_banner(inputs)
	if (locale === "it") return it_requests_fulfilled_banner(inputs)
	if (locale === "nl") return nl_requests_fulfilled_banner(inputs)
	if (locale === "pl") return pl_requests_fulfilled_banner(inputs)
	if (locale === "pt") return pt_requests_fulfilled_banner(inputs)
	if (locale === "ru") return ru_requests_fulfilled_banner(inputs)
	if (locale === "sv") return sv_requests_fulfilled_banner(inputs)
	if (locale === "tr") return tr_requests_fulfilled_banner(inputs)
	if (locale === "zh") return zh_requests_fulfilled_banner(inputs)
	if (locale === "ja") return ja_requests_fulfilled_banner(inputs)
	return en_requests_fulfilled_banner(inputs)
});
