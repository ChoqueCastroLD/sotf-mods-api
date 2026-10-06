/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_First_TitleInputs */

const en_jams_first_title = /** @type {(inputs: Jams_First_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The first Mod Jam will be announced soon`)
};

const es_jams_first_title = /** @type {(inputs: Jams_First_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El primer Mod Jam se anunciará pronto`)
};

const de_jams_first_title = /** @type {(inputs: Jams_First_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der erste Mod Jam wird bald angekündigt`)
};

const fr_jams_first_title = /** @type {(inputs: Jams_First_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le premier Mod Jam sera bientôt annoncé`)
};

const it_jams_first_title = /** @type {(inputs: Jams_First_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il primo Mod Jam sarà annunciato presto`)
};

const nl_jams_first_title = /** @type {(inputs: Jams_First_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De eerste Mod Jam wordt binnenkort aangekondigd`)
};

const pl_jams_first_title = /** @type {(inputs: Jams_First_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pierwszy Mod Jam zostanie wkrótce ogłoszony`)
};

const pt_jams_first_title = /** @type {(inputs: Jams_First_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O primeiro Mod Jam será anunciado em breve`)
};

const ru_jams_first_title = /** @type {(inputs: Jams_First_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Первый Mod Jam скоро будет объявлен`)
};

const sv_jams_first_title = /** @type {(inputs: Jams_First_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den första Mod Jammen tillkännages snart`)
};

const tr_jams_first_title = /** @type {(inputs: Jams_First_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İlk Mod Jam yakında duyurulacak`)
};

const zh_jams_first_title = /** @type {(inputs: Jams_First_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`首届 Mod Jam 即将公布`)
};

const ja_jams_first_title = /** @type {(inputs: Jams_First_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最初の Mod Jam はまもなく発表されます`)
};

/**
* | output |
* | --- |
* | "The first Mod Jam will be announced soon" |
*
* @param {Jams_First_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_first_title = /** @type {((inputs?: Jams_First_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_First_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_first_title(inputs)
	if (locale === "de") return de_jams_first_title(inputs)
	if (locale === "fr") return fr_jams_first_title(inputs)
	if (locale === "it") return it_jams_first_title(inputs)
	if (locale === "nl") return nl_jams_first_title(inputs)
	if (locale === "pl") return pl_jams_first_title(inputs)
	if (locale === "pt") return pt_jams_first_title(inputs)
	if (locale === "ru") return ru_jams_first_title(inputs)
	if (locale === "sv") return sv_jams_first_title(inputs)
	if (locale === "tr") return tr_jams_first_title(inputs)
	if (locale === "zh") return zh_jams_first_title(inputs)
	if (locale === "ja") return ja_jams_first_title(inputs)
	return en_jams_first_title(inputs)
});
