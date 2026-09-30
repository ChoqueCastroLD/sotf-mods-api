/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Bundles_TitleInputs */

const en_bundles_title = /** @type {(inputs: Bundles_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Official bundle`)
};

const es_bundles_title = /** @type {(inputs: Bundles_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paquete oficial`)
};

const de_bundles_title = /** @type {(inputs: Bundles_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Offizielles Paket`)
};

const fr_bundles_title = /** @type {(inputs: Bundles_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pack officiel`)
};

const it_bundles_title = /** @type {(inputs: Bundles_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pacchetto ufficiale`)
};

const nl_bundles_title = /** @type {(inputs: Bundles_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Officieel pakket`)
};

const pl_bundles_title = /** @type {(inputs: Bundles_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oficjalny pakiet`)
};

const pt_bundles_title = /** @type {(inputs: Bundles_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pacote oficial`)
};

const ru_bundles_title = /** @type {(inputs: Bundles_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Официальный набор`)
};

const sv_bundles_title = /** @type {(inputs: Bundles_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Officiellt paket`)
};

const tr_bundles_title = /** @type {(inputs: Bundles_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resmi paket`)
};

const zh_bundles_title = /** @type {(inputs: Bundles_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`官方整合包`)
};

const ja_bundles_title = /** @type {(inputs: Bundles_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公式バンドル`)
};

/**
* | output |
* | --- |
* | "Official bundle" |
*
* @param {Bundles_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const bundles_title = /** @type {((inputs?: Bundles_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Bundles_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_bundles_title(inputs)
	if (locale === "de") return de_bundles_title(inputs)
	if (locale === "fr") return fr_bundles_title(inputs)
	if (locale === "it") return it_bundles_title(inputs)
	if (locale === "nl") return nl_bundles_title(inputs)
	if (locale === "pl") return pl_bundles_title(inputs)
	if (locale === "pt") return pt_bundles_title(inputs)
	if (locale === "ru") return ru_bundles_title(inputs)
	if (locale === "sv") return sv_bundles_title(inputs)
	if (locale === "tr") return tr_bundles_title(inputs)
	if (locale === "zh") return zh_bundles_title(inputs)
	if (locale === "ja") return ja_bundles_title(inputs)
	return en_bundles_title(inputs)
});
