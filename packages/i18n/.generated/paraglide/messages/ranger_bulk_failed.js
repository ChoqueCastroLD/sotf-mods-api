/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Bulk_FailedInputs */

const en_ranger_bulk_failed = /** @type {(inputs: Ranger_Bulk_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`None of the selected items could be changed`)
};

const es_ranger_bulk_failed = /** @type {(inputs: Ranger_Bulk_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo cambiar ninguno de los elementos seleccionados`)
};

const de_ranger_bulk_failed = /** @type {(inputs: Ranger_Bulk_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keiner der ausgewählten Einträge konnte geändert werden`)
};

const fr_ranger_bulk_failed = /** @type {(inputs: Ranger_Bulk_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun des éléments sélectionnés n’a pu être modifié`)
};

const it_ranger_bulk_failed = /** @type {(inputs: Ranger_Bulk_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuno degli elementi selezionati è stato modificato`)
};

const nl_ranger_bulk_failed = /** @type {(inputs: Ranger_Bulk_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen van de geselecteerde items kon worden gewijzigd`)
};

const pl_ranger_bulk_failed = /** @type {(inputs: Ranger_Bulk_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się zmienić żadnej z wybranych pozycji`)
};

const pt_ranger_bulk_failed = /** @type {(inputs: Ranger_Bulk_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum dos itens selecionados pôde ser alterado`)
};

const ru_ranger_bulk_failed = /** @type {(inputs: Ranger_Bulk_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось изменить ни один из выбранных элементов`)
};

const sv_ranger_bulk_failed = /** @type {(inputs: Ranger_Bulk_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inget av de valda objekten kunde ändras`)
};

const tr_ranger_bulk_failed = /** @type {(inputs: Ranger_Bulk_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seçilen öğelerin hiçbiri değiştirilemedi`)
};

const zh_ranger_bulk_failed = /** @type {(inputs: Ranger_Bulk_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`所选项目均未能更改`)
};

const ja_ranger_bulk_failed = /** @type {(inputs: Ranger_Bulk_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`選択した項目はどれも変更できませんでした`)
};

/**
* | output |
* | --- |
* | "None of the selected items could be changed" |
*
* @param {Ranger_Bulk_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_bulk_failed = /** @type {((inputs?: Ranger_Bulk_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Bulk_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_bulk_failed(inputs)
	if (locale === "de") return de_ranger_bulk_failed(inputs)
	if (locale === "fr") return fr_ranger_bulk_failed(inputs)
	if (locale === "it") return it_ranger_bulk_failed(inputs)
	if (locale === "nl") return nl_ranger_bulk_failed(inputs)
	if (locale === "pl") return pl_ranger_bulk_failed(inputs)
	if (locale === "pt") return pt_ranger_bulk_failed(inputs)
	if (locale === "ru") return ru_ranger_bulk_failed(inputs)
	if (locale === "sv") return sv_ranger_bulk_failed(inputs)
	if (locale === "tr") return tr_ranger_bulk_failed(inputs)
	if (locale === "zh") return zh_ranger_bulk_failed(inputs)
	if (locale === "ja") return ja_ranger_bulk_failed(inputs)
	return en_ranger_bulk_failed(inputs)
});
