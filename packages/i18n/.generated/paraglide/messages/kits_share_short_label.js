/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Share_Short_LabelInputs */

const en_kits_share_short_label = /** @type {(inputs: Kits_Share_Short_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Short link`)
};

const es_kits_share_short_label = /** @type {(inputs: Kits_Share_Short_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enlace corto`)
};

const de_kits_share_short_label = /** @type {(inputs: Kits_Share_Short_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kurzlink`)
};

const fr_kits_share_short_label = /** @type {(inputs: Kits_Share_Short_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lien court`)
};

const it_kits_share_short_label = /** @type {(inputs: Kits_Share_Short_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link breve`)
};

const nl_kits_share_short_label = /** @type {(inputs: Kits_Share_Short_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Korte link`)
};

const pl_kits_share_short_label = /** @type {(inputs: Kits_Share_Short_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Krótki link`)
};

const pt_kits_share_short_label = /** @type {(inputs: Kits_Share_Short_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link curto`)
};

const ru_kits_share_short_label = /** @type {(inputs: Kits_Share_Short_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Короткая ссылка`)
};

const sv_kits_share_short_label = /** @type {(inputs: Kits_Share_Short_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kortlänk`)
};

const tr_kits_share_short_label = /** @type {(inputs: Kits_Share_Short_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kısa bağlantı`)
};

const zh_kits_share_short_label = /** @type {(inputs: Kits_Share_Short_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`短链接`)
};

const ja_kits_share_short_label = /** @type {(inputs: Kits_Share_Short_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`短縮リンク`)
};

/**
* | output |
* | --- |
* | "Short link" |
*
* @param {Kits_Share_Short_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_share_short_label = /** @type {((inputs?: Kits_Share_Short_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Share_Short_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_share_short_label(inputs)
	if (locale === "de") return de_kits_share_short_label(inputs)
	if (locale === "fr") return fr_kits_share_short_label(inputs)
	if (locale === "it") return it_kits_share_short_label(inputs)
	if (locale === "nl") return nl_kits_share_short_label(inputs)
	if (locale === "pl") return pl_kits_share_short_label(inputs)
	if (locale === "pt") return pt_kits_share_short_label(inputs)
	if (locale === "ru") return ru_kits_share_short_label(inputs)
	if (locale === "sv") return sv_kits_share_short_label(inputs)
	if (locale === "tr") return tr_kits_share_short_label(inputs)
	if (locale === "zh") return zh_kits_share_short_label(inputs)
	if (locale === "ja") return ja_kits_share_short_label(inputs)
	return en_kits_share_short_label(inputs)
});
