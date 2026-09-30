/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_Tags_MissingInputs */

const en_upload_preflight_tags_missing = /** @type {(inputs: Upload_Preflight_Tags_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No tags: they help survivors find it.`)
};

const es_upload_preflight_tags_missing = /** @type {(inputs: Upload_Preflight_Tags_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin etiquetas: ayudan a que los supervivientes lo encuentren.`)
};

const de_upload_preflight_tags_missing = /** @type {(inputs: Upload_Preflight_Tags_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Tags: Sie helfen Überlebenden, ihn zu finden.`)
};

const fr_upload_preflight_tags_missing = /** @type {(inputs: Upload_Preflight_Tags_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun tag : ils aident les survivants à le trouver.`)
};

const it_upload_preflight_tags_missing = /** @type {(inputs: Upload_Preflight_Tags_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun tag: aiutano i sopravvissuti a trovarla.`)
};

const nl_upload_preflight_tags_missing = /** @type {(inputs: Upload_Preflight_Tags_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen tags: ze helpen overlevenden hem te vinden.`)
};

const pl_upload_preflight_tags_missing = /** @type {(inputs: Upload_Preflight_Tags_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak tagów: pomagają ocalałym go znaleźć.`)
};

const pt_upload_preflight_tags_missing = /** @type {(inputs: Upload_Preflight_Tags_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sem tags: elas ajudam os sobreviventes a encontrá-lo.`)
};

const ru_upload_preflight_tags_missing = /** @type {(inputs: Upload_Preflight_Tags_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет тегов: они помогают выжившим найти мод.`)
};

const sv_upload_preflight_tags_missing = /** @type {(inputs: Upload_Preflight_Tags_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga taggar: de hjälper överlevare att hitta den.`)
};

const tr_upload_preflight_tags_missing = /** @type {(inputs: Upload_Preflight_Tags_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etiket yok: hayatta kalanların onu bulmasına yardım ederler.`)
};

const zh_upload_preflight_tags_missing = /** @type {(inputs: Upload_Preflight_Tags_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有标签：标签能帮助幸存者找到它。`)
};

const ja_upload_preflight_tags_missing = /** @type {(inputs: Upload_Preflight_Tags_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`タグがありません。タグはサバイバーが見つける手がかりになります。`)
};

/**
* | output |
* | --- |
* | "No tags: they help survivors find it." |
*
* @param {Upload_Preflight_Tags_MissingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_tags_missing = /** @type {((inputs?: Upload_Preflight_Tags_MissingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Tags_MissingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_tags_missing(inputs)
	if (locale === "de") return de_upload_preflight_tags_missing(inputs)
	if (locale === "fr") return fr_upload_preflight_tags_missing(inputs)
	if (locale === "it") return it_upload_preflight_tags_missing(inputs)
	if (locale === "nl") return nl_upload_preflight_tags_missing(inputs)
	if (locale === "pl") return pl_upload_preflight_tags_missing(inputs)
	if (locale === "pt") return pt_upload_preflight_tags_missing(inputs)
	if (locale === "ru") return ru_upload_preflight_tags_missing(inputs)
	if (locale === "sv") return sv_upload_preflight_tags_missing(inputs)
	if (locale === "tr") return tr_upload_preflight_tags_missing(inputs)
	if (locale === "zh") return zh_upload_preflight_tags_missing(inputs)
	if (locale === "ja") return ja_upload_preflight_tags_missing(inputs)
	return en_upload_preflight_tags_missing(inputs)
});
