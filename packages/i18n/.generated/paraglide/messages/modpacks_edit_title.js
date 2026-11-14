/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Edit_TitleInputs */

const en_modpacks_edit_title = /** @type {(inputs: Modpacks_Edit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit modpack`)
};

const es_modpacks_edit_title = /** @type {(inputs: Modpacks_Edit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar modpack`)
};

const de_modpacks_edit_title = /** @type {(inputs: Modpacks_Edit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpack bearbeiten`)
};

const fr_modpacks_edit_title = /** @type {(inputs: Modpacks_Edit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifier le modpack`)
};

const it_modpacks_edit_title = /** @type {(inputs: Modpacks_Edit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifica modpack`)
};

const nl_modpacks_edit_title = /** @type {(inputs: Modpacks_Edit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpack bewerken`)
};

const pl_modpacks_edit_title = /** @type {(inputs: Modpacks_Edit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edytuj modpack`)
};

const pt_modpacks_edit_title = /** @type {(inputs: Modpacks_Edit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar modpack`)
};

const ru_modpacks_edit_title = /** @type {(inputs: Modpacks_Edit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Редактировать модпак`)
};

const sv_modpacks_edit_title = /** @type {(inputs: Modpacks_Edit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redigera modpaket`)
};

const tr_modpacks_edit_title = /** @type {(inputs: Modpacks_Edit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod paketini düzenle`)
};

const zh_modpacks_edit_title = /** @type {(inputs: Modpacks_Edit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`编辑整合包`)
};

const ja_modpacks_edit_title = /** @type {(inputs: Modpacks_Edit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modパックを編集`)
};

/**
* | output |
* | --- |
* | "Edit modpack" |
*
* @param {Modpacks_Edit_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_edit_title = /** @type {((inputs?: Modpacks_Edit_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Edit_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_edit_title(inputs)
	if (locale === "de") return de_modpacks_edit_title(inputs)
	if (locale === "fr") return fr_modpacks_edit_title(inputs)
	if (locale === "it") return it_modpacks_edit_title(inputs)
	if (locale === "nl") return nl_modpacks_edit_title(inputs)
	if (locale === "pl") return pl_modpacks_edit_title(inputs)
	if (locale === "pt") return pt_modpacks_edit_title(inputs)
	if (locale === "ru") return ru_modpacks_edit_title(inputs)
	if (locale === "sv") return sv_modpacks_edit_title(inputs)
	if (locale === "tr") return tr_modpacks_edit_title(inputs)
	if (locale === "zh") return zh_modpacks_edit_title(inputs)
	if (locale === "ja") return ja_modpacks_edit_title(inputs)
	return en_modpacks_edit_title(inputs)
});
