/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Booth_NoneInputs */

const en_jams_booth_none = /** @type {(inputs: Jams_Booth_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`There is nothing to vote on.`)
};

const es_jams_booth_none = /** @type {(inputs: Jams_Booth_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay nada que votar.`)
};

const de_jams_booth_none = /** @type {(inputs: Jams_Booth_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Es gibt nichts zum Abstimmen.`)
};

const fr_jams_booth_none = /** @type {(inputs: Jams_Booth_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il n'y a rien à voter.`)
};

const it_jams_booth_none = /** @type {(inputs: Jams_Booth_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non c'è nulla su cui votare.`)
};

const nl_jams_booth_none = /** @type {(inputs: Jams_Booth_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er valt niets te stemmen.`)
};

const pl_jams_booth_none = /** @type {(inputs: Jams_Booth_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie ma na co głosować.`)
};

const pt_jams_booth_none = /** @type {(inputs: Jams_Booth_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não há nada para votar.`)
};

const ru_jams_booth_none = /** @type {(inputs: Jams_Booth_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не за что голосовать.`)
};

const sv_jams_booth_none = /** @type {(inputs: Jams_Booth_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det finns inget att rösta på.`)
};

const tr_jams_booth_none = /** @type {(inputs: Jams_Booth_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oylanacak bir şey yok.`)
};

const zh_jams_booth_none = /** @type {(inputs: Jams_Booth_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有可投票的作品。`)
};

const ja_jams_booth_none = /** @type {(inputs: Jams_Booth_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票できる作品がありません。`)
};

/**
* | output |
* | --- |
* | "There is nothing to vote on." |
*
* @param {Jams_Booth_NoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_booth_none = /** @type {((inputs?: Jams_Booth_NoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Booth_NoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_booth_none(inputs)
	if (locale === "de") return de_jams_booth_none(inputs)
	if (locale === "fr") return fr_jams_booth_none(inputs)
	if (locale === "it") return it_jams_booth_none(inputs)
	if (locale === "nl") return nl_jams_booth_none(inputs)
	if (locale === "pl") return pl_jams_booth_none(inputs)
	if (locale === "pt") return pt_jams_booth_none(inputs)
	if (locale === "ru") return ru_jams_booth_none(inputs)
	if (locale === "sv") return sv_jams_booth_none(inputs)
	if (locale === "tr") return tr_jams_booth_none(inputs)
	if (locale === "zh") return zh_jams_booth_none(inputs)
	if (locale === "ja") return ja_jams_booth_none(inputs)
	return en_jams_booth_none(inputs)
});
