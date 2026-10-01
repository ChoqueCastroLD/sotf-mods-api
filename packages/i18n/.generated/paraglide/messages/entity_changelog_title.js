/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Entity_Changelog_TitleInputs */

const en_entity_changelog_title = /** @type {(inputs: Entity_Changelog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Changelog`)
};

const es_entity_changelog_title = /** @type {(inputs: Entity_Changelog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registro de cambios`)
};

const de_entity_changelog_title = /** @type {(inputs: Entity_Changelog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Änderungsprotokoll`)
};

const fr_entity_changelog_title = /** @type {(inputs: Entity_Changelog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Journal des modifications`)
};

const it_entity_changelog_title = /** @type {(inputs: Entity_Changelog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Note di rilascio`)
};

const nl_entity_changelog_title = /** @type {(inputs: Entity_Changelog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wijzigingslogboek`)
};

const pl_entity_changelog_title = /** @type {(inputs: Entity_Changelog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lista zmian`)
};

const pt_entity_changelog_title = /** @type {(inputs: Entity_Changelog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registro de alterações`)
};

const ru_entity_changelog_title = /** @type {(inputs: Entity_Changelog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Список изменений`)
};

const sv_entity_changelog_title = /** @type {(inputs: Entity_Changelog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ändringslogg`)
};

const tr_entity_changelog_title = /** @type {(inputs: Entity_Changelog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Değişiklik günlüğü`)
};

const zh_entity_changelog_title = /** @type {(inputs: Entity_Changelog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新日志`)
};

const ja_entity_changelog_title = /** @type {(inputs: Entity_Changelog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`変更履歴`)
};

/**
* | output |
* | --- |
* | "Changelog" |
*
* @param {Entity_Changelog_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const entity_changelog_title = /** @type {((inputs?: Entity_Changelog_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Entity_Changelog_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_entity_changelog_title(inputs)
	if (locale === "de") return de_entity_changelog_title(inputs)
	if (locale === "fr") return fr_entity_changelog_title(inputs)
	if (locale === "it") return it_entity_changelog_title(inputs)
	if (locale === "nl") return nl_entity_changelog_title(inputs)
	if (locale === "pl") return pl_entity_changelog_title(inputs)
	if (locale === "pt") return pt_entity_changelog_title(inputs)
	if (locale === "ru") return ru_entity_changelog_title(inputs)
	if (locale === "sv") return sv_entity_changelog_title(inputs)
	if (locale === "tr") return tr_entity_changelog_title(inputs)
	if (locale === "zh") return zh_entity_changelog_title(inputs)
	if (locale === "ja") return ja_entity_changelog_title(inputs)
	return en_entity_changelog_title(inputs)
});
