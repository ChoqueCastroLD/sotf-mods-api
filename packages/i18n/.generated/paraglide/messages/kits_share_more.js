/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Share_MoreInputs */

const en_kits_share_more = /** @type {(inputs: Kits_Share_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`More options`)
};

const es_kits_share_more = /** @type {(inputs: Kits_Share_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más opciones`)
};

const de_kits_share_more = /** @type {(inputs: Kits_Share_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weitere Optionen`)
};

const fr_kits_share_more = /** @type {(inputs: Kits_Share_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plus d’options`)
};

const it_kits_share_more = /** @type {(inputs: Kits_Share_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Altre opzioni`)
};

const nl_kits_share_more = /** @type {(inputs: Kits_Share_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meer opties`)
};

const pl_kits_share_more = /** @type {(inputs: Kits_Share_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Więcej opcji`)
};

const pt_kits_share_more = /** @type {(inputs: Kits_Share_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais opções`)
};

const ru_kits_share_more = /** @type {(inputs: Kits_Share_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Другие варианты`)
};

const sv_kits_share_more = /** @type {(inputs: Kits_Share_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fler alternativ`)
};

const tr_kits_share_more = /** @type {(inputs: Kits_Share_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diğer seçenekler`)
};

const zh_kits_share_more = /** @type {(inputs: Kits_Share_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更多选项`)
};

const ja_kits_share_more = /** @type {(inputs: Kits_Share_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`その他のオプション`)
};

/**
* | output |
* | --- |
* | "More options" |
*
* @param {Kits_Share_MoreInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_share_more = /** @type {((inputs?: Kits_Share_MoreInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Share_MoreInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_share_more(inputs)
	if (locale === "de") return de_kits_share_more(inputs)
	if (locale === "fr") return fr_kits_share_more(inputs)
	if (locale === "it") return it_kits_share_more(inputs)
	if (locale === "nl") return nl_kits_share_more(inputs)
	if (locale === "pl") return pl_kits_share_more(inputs)
	if (locale === "pt") return pt_kits_share_more(inputs)
	if (locale === "ru") return ru_kits_share_more(inputs)
	if (locale === "sv") return sv_kits_share_more(inputs)
	if (locale === "tr") return tr_kits_share_more(inputs)
	if (locale === "zh") return zh_kits_share_more(inputs)
	if (locale === "ja") return ja_kits_share_more(inputs)
	return en_kits_share_more(inputs)
});
