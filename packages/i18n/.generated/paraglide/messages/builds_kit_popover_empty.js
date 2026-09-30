/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Kit_Popover_EmptyInputs */

const en_builds_kit_popover_empty = /** @type {(inputs: Builds_Kit_Popover_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You have no Kits yet.`)
};

const es_builds_kit_popover_empty = /** @type {(inputs: Builds_Kit_Popover_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no tienes Kits.`)
};

const de_builds_kit_popover_empty = /** @type {(inputs: Builds_Kit_Popover_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du hast noch keine Kits.`)
};

const fr_builds_kit_popover_empty = /** @type {(inputs: Builds_Kit_Popover_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous n’avez pas encore de Kits.`)
};

const it_builds_kit_popover_empty = /** @type {(inputs: Builds_Kit_Popover_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non hai ancora Kit.`)
};

const nl_builds_kit_popover_empty = /** @type {(inputs: Builds_Kit_Popover_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je hebt nog geen Kits.`)
};

const pl_builds_kit_popover_empty = /** @type {(inputs: Builds_Kit_Popover_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie masz jeszcze Zestawów.`)
};

const pt_builds_kit_popover_empty = /** @type {(inputs: Builds_Kit_Popover_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você ainda não tem Kits.`)
};

const ru_builds_kit_popover_empty = /** @type {(inputs: Builds_Kit_Popover_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`У вас пока нет наборов.`)
};

const sv_builds_kit_popover_empty = /** @type {(inputs: Builds_Kit_Popover_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du har inga Kits än.`)
};

const tr_builds_kit_popover_empty = /** @type {(inputs: Builds_Kit_Popover_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz Kit’in yok.`)
};

const zh_builds_kit_popover_empty = /** @type {(inputs: Builds_Kit_Popover_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你还没有套件。`)
};

const ja_builds_kit_popover_empty = /** @type {(inputs: Builds_Kit_Popover_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キットはまだありません。`)
};

/**
* | output |
* | --- |
* | "You have no Kits yet." |
*
* @param {Builds_Kit_Popover_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_kit_popover_empty = /** @type {((inputs?: Builds_Kit_Popover_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Kit_Popover_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_kit_popover_empty(inputs)
	if (locale === "de") return de_builds_kit_popover_empty(inputs)
	if (locale === "fr") return fr_builds_kit_popover_empty(inputs)
	if (locale === "it") return it_builds_kit_popover_empty(inputs)
	if (locale === "nl") return nl_builds_kit_popover_empty(inputs)
	if (locale === "pl") return pl_builds_kit_popover_empty(inputs)
	if (locale === "pt") return pt_builds_kit_popover_empty(inputs)
	if (locale === "ru") return ru_builds_kit_popover_empty(inputs)
	if (locale === "sv") return sv_builds_kit_popover_empty(inputs)
	if (locale === "tr") return tr_builds_kit_popover_empty(inputs)
	if (locale === "zh") return zh_builds_kit_popover_empty(inputs)
	if (locale === "ja") return ja_builds_kit_popover_empty(inputs)
	return en_builds_kit_popover_empty(inputs)
});
