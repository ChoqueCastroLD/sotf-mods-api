/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Editor_Removed_TitleInputs */

const en_basecamp_editor_removed_title = /** @type {(inputs: Basecamp_Editor_Removed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Removed by moderators`)
};

const es_basecamp_editor_removed_title = /** @type {(inputs: Basecamp_Editor_Removed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirado por los moderadores`)
};

const de_basecamp_editor_removed_title = /** @type {(inputs: Basecamp_Editor_Removed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Von den Moderatoren entfernt`)
};

const fr_basecamp_editor_removed_title = /** @type {(inputs: Basecamp_Editor_Removed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retiré par les modérateurs`)
};

const it_basecamp_editor_removed_title = /** @type {(inputs: Basecamp_Editor_Removed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rimossa dai moderatori`)
};

const nl_basecamp_editor_removed_title = /** @type {(inputs: Basecamp_Editor_Removed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwijderd door de moderators`)
};

const pl_basecamp_editor_removed_title = /** @type {(inputs: Basecamp_Editor_Removed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usunięty przez moderatorów`)
};

const pt_basecamp_editor_removed_title = /** @type {(inputs: Basecamp_Editor_Removed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Removido pelos moderadores`)
};

const ru_basecamp_editor_removed_title = /** @type {(inputs: Basecamp_Editor_Removed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалён модераторами`)
};

const sv_basecamp_editor_removed_title = /** @type {(inputs: Basecamp_Editor_Removed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Borttagen av moderatorerna`)
};

const tr_basecamp_editor_removed_title = /** @type {(inputs: Basecamp_Editor_Removed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderatörler tarafından kaldırıldı`)
};

const zh_basecamp_editor_removed_title = /** @type {(inputs: Basecamp_Editor_Removed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已被版主下架`)
};

const ja_basecamp_editor_removed_title = /** @type {(inputs: Basecamp_Editor_Removed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`モデレーターにより削除`)
};

/**
* | output |
* | --- |
* | "Removed by moderators" |
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
