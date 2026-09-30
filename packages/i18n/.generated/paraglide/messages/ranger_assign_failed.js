/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Assign_FailedInputs */

const en_ranger_assign_failed = /** @type {(inputs: Ranger_Assign_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn’t change who has this item`)
};

const es_ranger_assign_failed = /** @type {(inputs: Ranger_Assign_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo cambiar la asignación`)
};

const de_ranger_assign_failed = /** @type {(inputs: Ranger_Assign_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zuweisung konnte nicht geändert werden`)
};

const fr_ranger_assign_failed = /** @type {(inputs: Ranger_Assign_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de changer l’attribution`)
};

const it_ranger_assign_failed = /** @type {(inputs: Ranger_Assign_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile cambiare l’assegnazione`)
};

const nl_ranger_assign_failed = /** @type {(inputs: Ranger_Assign_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toewijzing kon niet worden gewijzigd`)
};

const pl_ranger_assign_failed = /** @type {(inputs: Ranger_Assign_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się zmienić przypisania`)
};

const pt_ranger_assign_failed = /** @type {(inputs: Ranger_Assign_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível alterar a atribuição`)
};

const ru_ranger_assign_failed = /** @type {(inputs: Ranger_Assign_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось изменить назначение`)
};

const sv_ranger_assign_failed = /** @type {(inputs: Ranger_Assign_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kunde inte ändra tilldelningen`)
};

const tr_ranger_assign_failed = /** @type {(inputs: Ranger_Assign_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atama değiştirilemedi`)
};

const zh_ranger_assign_failed = /** @type {(inputs: Ranger_Assign_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法更改分配`)
};

const ja_ranger_assign_failed = /** @type {(inputs: Ranger_Assign_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`割り当てを変更できませんでした`)
};

/**
* | output |
* | --- |
* | "Couldn’t change who has this item" |
*
* @param {Ranger_Assign_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_assign_failed = /** @type {((inputs?: Ranger_Assign_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Assign_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_assign_failed(inputs)
	if (locale === "de") return de_ranger_assign_failed(inputs)
	if (locale === "fr") return fr_ranger_assign_failed(inputs)
	if (locale === "it") return it_ranger_assign_failed(inputs)
	if (locale === "nl") return nl_ranger_assign_failed(inputs)
	if (locale === "pl") return pl_ranger_assign_failed(inputs)
	if (locale === "pt") return pt_ranger_assign_failed(inputs)
	if (locale === "ru") return ru_ranger_assign_failed(inputs)
	if (locale === "sv") return sv_ranger_assign_failed(inputs)
	if (locale === "tr") return tr_ranger_assign_failed(inputs)
	if (locale === "zh") return zh_ranger_assign_failed(inputs)
	if (locale === "ja") return ja_ranger_assign_failed(inputs)
	return en_ranger_assign_failed(inputs)
});
