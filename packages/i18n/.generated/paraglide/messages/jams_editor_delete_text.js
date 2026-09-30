/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Delete_TextInputs */

const en_jams_editor_delete_text = /** @type {(inputs: Jams_Editor_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Only drafts can be deleted. This cannot be undone.`)
};

const es_jams_editor_delete_text = /** @type {(inputs: Jams_Editor_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo se pueden eliminar borradores. No se puede deshacer.`)
};

const de_jams_editor_delete_text = /** @type {(inputs: Jams_Editor_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nur Entwürfe können gelöscht werden. Das lässt sich nicht rückgängig machen.`)
};

const fr_jams_editor_delete_text = /** @type {(inputs: Jams_Editor_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seuls les brouillons peuvent être supprimés. Action irréversible.`)
};

const it_jams_editor_delete_text = /** @type {(inputs: Jams_Editor_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Si possono eliminare solo le bozze. L'operazione non si può annullare.`)
};

const nl_jams_editor_delete_text = /** @type {(inputs: Jams_Editor_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alleen concepten kunnen worden verwijderd. Dit kan niet ongedaan worden gemaakt.`)
};

const pl_jams_editor_delete_text = /** @type {(inputs: Jams_Editor_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Można usuwać tylko szkice. Tej operacji nie można cofnąć.`)
};

const pt_jams_editor_delete_text = /** @type {(inputs: Jams_Editor_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Só rascunhos podem ser excluídos. Isso não pode ser desfeito.`)
};

const ru_jams_editor_delete_text = /** @type {(inputs: Jams_Editor_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалять можно только черновики. Действие необратимо.`)
};

const sv_jams_editor_delete_text = /** @type {(inputs: Jams_Editor_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Endast utkast kan tas bort. Det går inte att ångra.`)
};

const tr_jams_editor_delete_text = /** @type {(inputs: Jams_Editor_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yalnızca taslaklar silinebilir. Bu işlem geri alınamaz.`)
};

const zh_jams_editor_delete_text = /** @type {(inputs: Jams_Editor_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`只能删除草稿，且无法撤销。`)
};

const ja_jams_editor_delete_text = /** @type {(inputs: Jams_Editor_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`削除できるのは下書きのみです。元に戻せません。`)
};

/**
* | output |
* | --- |
* | "Only drafts can be deleted. This cannot be undone." |
*
* @param {Jams_Editor_Delete_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_delete_text = /** @type {((inputs?: Jams_Editor_Delete_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Delete_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_delete_text(inputs)
	if (locale === "de") return de_jams_editor_delete_text(inputs)
	if (locale === "fr") return fr_jams_editor_delete_text(inputs)
	if (locale === "it") return it_jams_editor_delete_text(inputs)
	if (locale === "nl") return nl_jams_editor_delete_text(inputs)
	if (locale === "pl") return pl_jams_editor_delete_text(inputs)
	if (locale === "pt") return pt_jams_editor_delete_text(inputs)
	if (locale === "ru") return ru_jams_editor_delete_text(inputs)
	if (locale === "sv") return sv_jams_editor_delete_text(inputs)
	if (locale === "tr") return tr_jams_editor_delete_text(inputs)
	if (locale === "zh") return zh_jams_editor_delete_text(inputs)
	if (locale === "ja") return ja_jams_editor_delete_text(inputs)
	return en_jams_editor_delete_text(inputs)
});
