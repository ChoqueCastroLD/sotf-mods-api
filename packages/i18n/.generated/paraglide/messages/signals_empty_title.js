/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Empty_TitleInputs */

const en_signals_empty_title = /** @type {(inputs: Signals_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All quiet in the forest`)
};

const es_signals_empty_title = /** @type {(inputs: Signals_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todo tranquilo en el bosque`)
};

const de_signals_empty_title = /** @type {(inputs: Signals_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles ruhig im Wald`)
};

const fr_signals_empty_title = /** @type {(inputs: Signals_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout est calme dans la forêt`)
};

const it_signals_empty_title = /** @type {(inputs: Signals_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutto tranquillo nella foresta`)
};

const nl_signals_empty_title = /** @type {(inputs: Signals_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles rustig in het bos`)
};

const pl_signals_empty_title = /** @type {(inputs: Signals_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`W lesie panuje cisza`)
};

const pt_signals_empty_title = /** @type {(inputs: Signals_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tudo tranquilo na floresta`)
};

const ru_signals_empty_title = /** @type {(inputs: Signals_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В лесу всё спокойно`)
};

const sv_signals_empty_title = /** @type {(inputs: Signals_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lugnt i skogen`)
};

const tr_signals_empty_title = /** @type {(inputs: Signals_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ormanda her şey sakin`)
};

const zh_signals_empty_title = /** @type {(inputs: Signals_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`森林里一片宁静`)
};

const ja_signals_empty_title = /** @type {(inputs: Signals_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`森は静かです`)
};

/**
* | output |
* | --- |
* | "All quiet in the forest" |
*
* @param {Signals_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_empty_title = /** @type {((inputs?: Signals_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_empty_title(inputs)
	if (locale === "de") return de_signals_empty_title(inputs)
	if (locale === "fr") return fr_signals_empty_title(inputs)
	if (locale === "it") return it_signals_empty_title(inputs)
	if (locale === "nl") return nl_signals_empty_title(inputs)
	if (locale === "pl") return pl_signals_empty_title(inputs)
	if (locale === "pt") return pt_signals_empty_title(inputs)
	if (locale === "ru") return ru_signals_empty_title(inputs)
	if (locale === "sv") return sv_signals_empty_title(inputs)
	if (locale === "tr") return tr_signals_empty_title(inputs)
	if (locale === "zh") return zh_signals_empty_title(inputs)
	if (locale === "ja") return ja_signals_empty_title(inputs)
	return en_signals_empty_title(inputs)
});
