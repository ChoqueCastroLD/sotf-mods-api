/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Empty_Try_RemovingInputs */

const en_explore_empty_try_removing = /** @type {(inputs: Explore_Empty_Try_RemovingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try removing:`)
};

const es_explore_empty_try_removing = /** @type {(inputs: Explore_Empty_Try_RemovingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prueba a quitar:`)
};

const de_explore_empty_try_removing = /** @type {(inputs: Explore_Empty_Try_RemovingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versuch, das zu entfernen:`)
};

const fr_explore_empty_try_removing = /** @type {(inputs: Explore_Empty_Try_RemovingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Essayez de retirer :`)
};

const it_explore_empty_try_removing = /** @type {(inputs: Explore_Empty_Try_RemovingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prova a rimuovere:`)
};

const nl_explore_empty_try_removing = /** @type {(inputs: Explore_Empty_Try_RemovingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Probeer dit weg te halen:`)
};

const pl_explore_empty_try_removing = /** @type {(inputs: Explore_Empty_Try_RemovingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spróbuj usunąć:`)
};

const pt_explore_empty_try_removing = /** @type {(inputs: Explore_Empty_Try_RemovingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tente remover:`)
};

const ru_explore_empty_try_removing = /** @type {(inputs: Explore_Empty_Try_RemovingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Попробуйте убрать:`)
};

const sv_explore_empty_try_removing = /** @type {(inputs: Explore_Empty_Try_RemovingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prova att ta bort:`)
};

const tr_explore_empty_try_removing = /** @type {(inputs: Explore_Empty_Try_RemovingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şunları kaldırmayı dene:`)
};

const zh_explore_empty_try_removing = /** @type {(inputs: Explore_Empty_Try_RemovingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`试试移除：`)
};

const ja_explore_empty_try_removing = /** @type {(inputs: Explore_Empty_Try_RemovingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`外してみる条件：`)
};

/**
* | output |
* | --- |
* | "Try removing:" |
*
* @param {Explore_Empty_Try_RemovingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_empty_try_removing = /** @type {((inputs?: Explore_Empty_Try_RemovingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Empty_Try_RemovingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_empty_try_removing(inputs)
	if (locale === "de") return de_explore_empty_try_removing(inputs)
	if (locale === "fr") return fr_explore_empty_try_removing(inputs)
	if (locale === "it") return it_explore_empty_try_removing(inputs)
	if (locale === "nl") return nl_explore_empty_try_removing(inputs)
	if (locale === "pl") return pl_explore_empty_try_removing(inputs)
	if (locale === "pt") return pt_explore_empty_try_removing(inputs)
	if (locale === "ru") return ru_explore_empty_try_removing(inputs)
	if (locale === "sv") return sv_explore_empty_try_removing(inputs)
	if (locale === "tr") return tr_explore_empty_try_removing(inputs)
	if (locale === "zh") return zh_explore_empty_try_removing(inputs)
	if (locale === "ja") return ja_explore_empty_try_removing(inputs)
	return en_explore_empty_try_removing(inputs)
});
