/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Editor_Removed_TextInputs */

const en_basecamp_editor_removed_text = /** @type {(inputs: Basecamp_Editor_Removed_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This mod is no longer public and cannot be edited.`)
};

const es_basecamp_editor_removed_text = /** @type {(inputs: Basecamp_Editor_Removed_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este mod ya no es público y no se puede editar.`)
};

const de_basecamp_editor_removed_text = /** @type {(inputs: Basecamp_Editor_Removed_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Mod ist nicht mehr öffentlich und kann nicht bearbeitet werden.`)
};

const fr_basecamp_editor_removed_text = /** @type {(inputs: Basecamp_Editor_Removed_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce mod n’est plus public et ne peut plus être modifié.`)
};

const it_basecamp_editor_removed_text = /** @type {(inputs: Basecamp_Editor_Removed_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questa mod non è più pubblica e non si può modificare.`)
};

const nl_basecamp_editor_removed_text = /** @type {(inputs: Basecamp_Editor_Removed_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze mod is niet meer openbaar en kan niet worden bewerkt.`)
};

const pl_basecamp_editor_removed_text = /** @type {(inputs: Basecamp_Editor_Removed_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten mod nie jest już publiczny i nie można go edytować.`)
};

const pt_basecamp_editor_removed_text = /** @type {(inputs: Basecamp_Editor_Removed_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este mod não é mais público e não pode ser editado.`)
};

const ru_basecamp_editor_removed_text = /** @type {(inputs: Basecamp_Editor_Removed_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Этот мод больше не публичный, и его нельзя редактировать.`)
};

const sv_basecamp_editor_removed_text = /** @type {(inputs: Basecamp_Editor_Removed_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här modden är inte längre offentlig och kan inte redigeras.`)
};

const tr_basecamp_editor_removed_text = /** @type {(inputs: Basecamp_Editor_Removed_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu mod artık herkese açık değil ve düzenlenemez.`)
};

const zh_basecamp_editor_removed_text = /** @type {(inputs: Basecamp_Editor_Removed_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此模组已不再公开，无法编辑。`)
};

const ja_basecamp_editor_removed_text = /** @type {(inputs: Basecamp_Editor_Removed_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この MOD は公開されておらず、編集できません。`)
};

/**
* | output |
* | --- |
* | "This mod is no longer public and cannot be edited." |
*
* @param {Basecamp_Editor_Removed_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_editor_removed_text = /** @type {((inputs?: Basecamp_Editor_Removed_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Editor_Removed_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_editor_removed_text(inputs)
	if (locale === "de") return de_basecamp_editor_removed_text(inputs)
	if (locale === "fr") return fr_basecamp_editor_removed_text(inputs)
	if (locale === "it") return it_basecamp_editor_removed_text(inputs)
	if (locale === "nl") return nl_basecamp_editor_removed_text(inputs)
	if (locale === "pl") return pl_basecamp_editor_removed_text(inputs)
	if (locale === "pt") return pt_basecamp_editor_removed_text(inputs)
	if (locale === "ru") return ru_basecamp_editor_removed_text(inputs)
	if (locale === "sv") return sv_basecamp_editor_removed_text(inputs)
	if (locale === "tr") return tr_basecamp_editor_removed_text(inputs)
	if (locale === "zh") return zh_basecamp_editor_removed_text(inputs)
	if (locale === "ja") return ja_basecamp_editor_removed_text(inputs)
	return en_basecamp_editor_removed_text(inputs)
});
