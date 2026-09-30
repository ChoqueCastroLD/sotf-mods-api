/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Editor_Removed_TitleInputs */

const en_basecamp_editor_removed_title = /** @type {(inputs: Basecamp_Editor_Removed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Removed by the rangers`)
};

const es_basecamp_editor_removed_title = /** @type {(inputs: Basecamp_Editor_Removed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirado por los guardabosques`)
};

const de_basecamp_editor_removed_title = /** @type {(inputs: Basecamp_Editor_Removed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Von den Rangern entfernt`)
};

const fr_basecamp_editor_removed_title = /** @type {(inputs: Basecamp_Editor_Removed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retiré par les rangers`)
};

const it_basecamp_editor_removed_title = /** @type {(inputs: Basecamp_Editor_Removed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rimossa dai ranger`)
};

const nl_basecamp_editor_removed_title = /** @type {(inputs: Basecamp_Editor_Removed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwijderd door de rangers`)
};

const pl_basecamp_editor_removed_title = /** @type {(inputs: Basecamp_Editor_Removed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usunięty przez strażników`)
};

const pt_basecamp_editor_removed_title = /** @type {(inputs: Basecamp_Editor_Removed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Removido pelos guardas`)
};

const ru_basecamp_editor_removed_title = /** @type {(inputs: Basecamp_Editor_Removed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалён рейнджерами`)
};

const sv_basecamp_editor_removed_title = /** @type {(inputs: Basecamp_Editor_Removed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Borttagen av rangers`)
};

const tr_basecamp_editor_removed_title = /** @type {(inputs: Basecamp_Editor_Removed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Korucular tarafından kaldırıldı`)
};

const zh_basecamp_editor_removed_title = /** @type {(inputs: Basecamp_Editor_Removed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已被护林员下架`)
};

const ja_basecamp_editor_removed_title = /** @type {(inputs: Basecamp_Editor_Removed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レンジャーにより削除`)
};

/**
* | output |
* | --- |
* | "Removed by the rangers" |
*
* @param {Basecamp_Editor_Removed_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_editor_removed_title = /** @type {((inputs?: Basecamp_Editor_Removed_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Editor_Removed_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_editor_removed_title(inputs)
	if (locale === "de") return de_basecamp_editor_removed_title(inputs)
	if (locale === "fr") return fr_basecamp_editor_removed_title(inputs)
	if (locale === "it") return it_basecamp_editor_removed_title(inputs)
	if (locale === "nl") return nl_basecamp_editor_removed_title(inputs)
	if (locale === "pl") return pl_basecamp_editor_removed_title(inputs)
	if (locale === "pt") return pt_basecamp_editor_removed_title(inputs)
	if (locale === "ru") return ru_basecamp_editor_removed_title(inputs)
	if (locale === "sv") return sv_basecamp_editor_removed_title(inputs)
	if (locale === "tr") return tr_basecamp_editor_removed_title(inputs)
	if (locale === "zh") return zh_basecamp_editor_removed_title(inputs)
	if (locale === "ja") return ja_basecamp_editor_removed_title(inputs)
	return en_basecamp_editor_removed_title(inputs)
});
