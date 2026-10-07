/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Bulk_Review_TitleInputs */

const en_ranger_bulk_review_title = /** @type {(inputs: Ranger_Bulk_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mark the selected versions as reviewed?`)
};

const es_ranger_bulk_review_title = /** @type {(inputs: Ranger_Bulk_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Marcar las versiones seleccionadas como revisadas?`)
};

const de_ranger_bulk_review_title = /** @type {(inputs: Ranger_Bulk_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ausgewählte Versionen als geprüft markieren?`)
};

const fr_ranger_bulk_review_title = /** @type {(inputs: Ranger_Bulk_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marquer les versions sélectionnées comme revues ?`)
};

const it_ranger_bulk_review_title = /** @type {(inputs: Ranger_Bulk_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnare le versioni selezionate come riviste?`)
};

const nl_ranger_bulk_review_title = /** @type {(inputs: Ranger_Bulk_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geselecteerde versies markeren als gecontroleerd?`)
};

const pl_ranger_bulk_review_title = /** @type {(inputs: Ranger_Bulk_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oznaczyć wybrane wersje jako sprawdzone?`)
};

const pt_ranger_bulk_review_title = /** @type {(inputs: Ranger_Bulk_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marcar as versões selecionadas como revisadas?`)
};

const ru_ranger_bulk_review_title = /** @type {(inputs: Ranger_Bulk_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отметить выбранные версии как проверенные?`)
};

const sv_ranger_bulk_review_title = /** @type {(inputs: Ranger_Bulk_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markera de valda versionerna som granskade?`)
};

const tr_ranger_bulk_review_title = /** @type {(inputs: Ranger_Bulk_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seçilen sürümler incelendi olarak işaretlensin mi?`)
};

const zh_ranger_bulk_review_title = /** @type {(inputs: Ranger_Bulk_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`将所选版本标记为已审核？`)
};

const ja_ranger_bulk_review_title = /** @type {(inputs: Ranger_Bulk_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`選択したバージョンをレビュー済みにしますか？`)
};

/**
* | output |
* | --- |
* | "Mark the selected versions as reviewed?" |
*
* @param {Ranger_Bulk_Review_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_bulk_review_title = /** @type {((inputs?: Ranger_Bulk_Review_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Bulk_Review_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_bulk_review_title(inputs)
	if (locale === "de") return de_ranger_bulk_review_title(inputs)
	if (locale === "fr") return fr_ranger_bulk_review_title(inputs)
	if (locale === "it") return it_ranger_bulk_review_title(inputs)
	if (locale === "nl") return nl_ranger_bulk_review_title(inputs)
	if (locale === "pl") return pl_ranger_bulk_review_title(inputs)
	if (locale === "pt") return pt_ranger_bulk_review_title(inputs)
	if (locale === "ru") return ru_ranger_bulk_review_title(inputs)
	if (locale === "sv") return sv_ranger_bulk_review_title(inputs)
	if (locale === "tr") return tr_ranger_bulk_review_title(inputs)
	if (locale === "zh") return zh_ranger_bulk_review_title(inputs)
	if (locale === "ja") return ja_ranger_bulk_review_title(inputs)
	return en_ranger_bulk_review_title(inputs)
});
