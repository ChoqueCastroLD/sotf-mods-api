/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Share_TitleInputs */

const en_kits_share_title = /** @type {(inputs: Kits_Share_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Share this kit`)
};

const es_kits_share_title = /** @type {(inputs: Kits_Share_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compartir este kit`)
};

const de_kits_share_title = /** @type {(inputs: Kits_Share_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieses Kit teilen`)
};

const fr_kits_share_title = /** @type {(inputs: Kits_Share_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Partager ce kit`)
};

const it_kits_share_title = /** @type {(inputs: Kits_Share_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Condividi questo kit`)
};

const nl_kits_share_title = /** @type {(inputs: Kits_Share_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze kit delen`)
};

const pl_kits_share_title = /** @type {(inputs: Kits_Share_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Udostępnij zestaw`)
};

const pt_kits_share_title = /** @type {(inputs: Kits_Share_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compartilhar este kit`)
};

const ru_kits_share_title = /** @type {(inputs: Kits_Share_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поделиться набором`)
};

const sv_kits_share_title = /** @type {(inputs: Kits_Share_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dela kitet`)
};

const tr_kits_share_title = /** @type {(inputs: Kits_Share_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu kiti paylaş`)
};

const zh_kits_share_title = /** @type {(inputs: Kits_Share_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分享这个套装`)
};

const ja_kits_share_title = /** @type {(inputs: Kits_Share_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このキットを共有`)
};

/**
* | output |
* | --- |
* | "Share this kit" |
*
* @param {Kits_Share_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_share_title = /** @type {((inputs?: Kits_Share_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Share_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_share_title(inputs)
	if (locale === "de") return de_kits_share_title(inputs)
	if (locale === "fr") return fr_kits_share_title(inputs)
	if (locale === "it") return it_kits_share_title(inputs)
	if (locale === "nl") return nl_kits_share_title(inputs)
	if (locale === "pl") return pl_kits_share_title(inputs)
	if (locale === "pt") return pt_kits_share_title(inputs)
	if (locale === "ru") return ru_kits_share_title(inputs)
	if (locale === "sv") return sv_kits_share_title(inputs)
	if (locale === "tr") return tr_kits_share_title(inputs)
	if (locale === "zh") return zh_kits_share_title(inputs)
	if (locale === "ja") return ja_kits_share_title(inputs)
	return en_kits_share_title(inputs)
});
