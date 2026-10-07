/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Shortcut_SelectInputs */

const en_ranger_shortcut_select = /** @type {(inputs: Ranger_Shortcut_SelectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select or unselect the open item`)
};

const es_ranger_shortcut_select = /** @type {(inputs: Ranger_Shortcut_SelectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seleccionar o quitar el elemento abierto`)
};

const de_ranger_shortcut_select = /** @type {(inputs: Ranger_Shortcut_SelectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geöffneten Eintrag auswählen oder abwählen`)
};

const fr_ranger_shortcut_select = /** @type {(inputs: Ranger_Shortcut_SelectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sélectionner ou désélectionner l’élément ouvert`)
};

const it_ranger_shortcut_select = /** @type {(inputs: Ranger_Shortcut_SelectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seleziona o deseleziona l’elemento aperto`)
};

const nl_ranger_shortcut_select = /** @type {(inputs: Ranger_Shortcut_SelectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geopend item selecteren of deselecteren`)
};

const pl_ranger_shortcut_select = /** @type {(inputs: Ranger_Shortcut_SelectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaznacz lub odznacz otwartą pozycję`)
};

const pt_ranger_shortcut_select = /** @type {(inputs: Ranger_Shortcut_SelectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Selecionar ou desmarcar o item aberto`)
};

const ru_ranger_shortcut_select = /** @type {(inputs: Ranger_Shortcut_SelectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выбрать или снять выбор с открытого элемента`)
};

const sv_ranger_shortcut_select = /** @type {(inputs: Ranger_Shortcut_SelectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markera eller avmarkera det öppna objektet`)
};

const tr_ranger_shortcut_select = /** @type {(inputs: Ranger_Shortcut_SelectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Açık öğeyi seç veya seçimi kaldır`)
};

const zh_ranger_shortcut_select = /** @type {(inputs: Ranger_Shortcut_SelectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选中或取消选中当前项目`)
};

const ja_ranger_shortcut_select = /** @type {(inputs: Ranger_Shortcut_SelectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`開いている項目を選択または選択解除`)
};

/**
* | output |
* | --- |
* | "Select or unselect the open item" |
*
* @param {Ranger_Shortcut_SelectInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_shortcut_select = /** @type {((inputs?: Ranger_Shortcut_SelectInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Shortcut_SelectInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_shortcut_select(inputs)
	if (locale === "de") return de_ranger_shortcut_select(inputs)
	if (locale === "fr") return fr_ranger_shortcut_select(inputs)
	if (locale === "it") return it_ranger_shortcut_select(inputs)
	if (locale === "nl") return nl_ranger_shortcut_select(inputs)
	if (locale === "pl") return pl_ranger_shortcut_select(inputs)
	if (locale === "pt") return pt_ranger_shortcut_select(inputs)
	if (locale === "ru") return ru_ranger_shortcut_select(inputs)
	if (locale === "sv") return sv_ranger_shortcut_select(inputs)
	if (locale === "tr") return tr_ranger_shortcut_select(inputs)
	if (locale === "zh") return zh_ranger_shortcut_select(inputs)
	if (locale === "ja") return ja_ranger_shortcut_select(inputs)
	return en_ranger_shortcut_select(inputs)
});
