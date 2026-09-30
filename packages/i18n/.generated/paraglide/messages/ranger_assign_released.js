/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Assign_ReleasedInputs */

const en_ranger_assign_released = /** @type {(inputs: Ranger_Assign_ReleasedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Item released.`)
};

const es_ranger_assign_released = /** @type {(inputs: Ranger_Assign_ReleasedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elemento liberado.`)
};

const de_ranger_assign_released = /** @type {(inputs: Ranger_Assign_ReleasedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eintrag freigegeben.`)
};

const fr_ranger_assign_released = /** @type {(inputs: Ranger_Assign_ReleasedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Élément libéré.`)
};

const it_ranger_assign_released = /** @type {(inputs: Ranger_Assign_ReleasedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elemento rilasciato.`)
};

const nl_ranger_assign_released = /** @type {(inputs: Ranger_Assign_ReleasedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Item vrijgegeven.`)
};

const pl_ranger_assign_released = /** @type {(inputs: Ranger_Assign_ReleasedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Element zwolniony.`)
};

const pt_ranger_assign_released = /** @type {(inputs: Ranger_Assign_ReleasedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Item liberado.`)
};

const ru_ranger_assign_released = /** @type {(inputs: Ranger_Assign_ReleasedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Элемент освобождён.`)
};

const sv_ranger_assign_released = /** @type {(inputs: Ranger_Assign_ReleasedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ärendet släpptes.`)
};

const tr_ranger_assign_released = /** @type {(inputs: Ranger_Assign_ReleasedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öğe bırakıldı.`)
};

const zh_ranger_assign_released = /** @type {(inputs: Ranger_Assign_ReleasedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已释放此项。`)
};

const ja_ranger_assign_released = /** @type {(inputs: Ranger_Assign_ReleasedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`割り当てを解除しました。`)
};

/**
* | output |
* | --- |
* | "Item released." |
*
* @param {Ranger_Assign_ReleasedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_assign_released = /** @type {((inputs?: Ranger_Assign_ReleasedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Assign_ReleasedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_assign_released(inputs)
	if (locale === "de") return de_ranger_assign_released(inputs)
	if (locale === "fr") return fr_ranger_assign_released(inputs)
	if (locale === "it") return it_ranger_assign_released(inputs)
	if (locale === "nl") return nl_ranger_assign_released(inputs)
	if (locale === "pl") return pl_ranger_assign_released(inputs)
	if (locale === "pt") return pt_ranger_assign_released(inputs)
	if (locale === "ru") return ru_ranger_assign_released(inputs)
	if (locale === "sv") return sv_ranger_assign_released(inputs)
	if (locale === "tr") return tr_ranger_assign_released(inputs)
	if (locale === "zh") return zh_ranger_assign_released(inputs)
	if (locale === "ja") return ja_ranger_assign_released(inputs)
	return en_ranger_assign_released(inputs)
});
