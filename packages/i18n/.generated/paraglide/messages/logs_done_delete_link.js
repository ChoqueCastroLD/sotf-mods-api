/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Done_Delete_LinkInputs */

const en_logs_done_delete_link = /** @type {(inputs: Logs_Done_Delete_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Private delete link`)
};

const es_logs_done_delete_link = /** @type {(inputs: Logs_Done_Delete_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enlace privado para borrar`)
};

const de_logs_done_delete_link = /** @type {(inputs: Logs_Done_Delete_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privater Löschlink`)
};

const fr_logs_done_delete_link = /** @type {(inputs: Logs_Done_Delete_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lien de suppression privé`)
};

const it_logs_done_delete_link = /** @type {(inputs: Logs_Done_Delete_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link privato di eliminazione`)
};

const nl_logs_done_delete_link = /** @type {(inputs: Logs_Done_Delete_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privé verwijderlink`)
};

const pl_logs_done_delete_link = /** @type {(inputs: Logs_Done_Delete_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prywatny link do usunięcia`)
};

const pt_logs_done_delete_link = /** @type {(inputs: Logs_Done_Delete_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ligação privada para apagar`)
};

const ru_logs_done_delete_link = /** @type {(inputs: Logs_Done_Delete_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Приватная ссылка для удаления`)
};

const sv_logs_done_delete_link = /** @type {(inputs: Logs_Done_Delete_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privat raderingslänk`)
};

const tr_logs_done_delete_link = /** @type {(inputs: Logs_Done_Delete_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Özel silme bağlantısı`)
};

const zh_logs_done_delete_link = /** @type {(inputs: Logs_Done_Delete_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`私密删除链接`)
};

const ja_logs_done_delete_link = /** @type {(inputs: Logs_Done_Delete_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`非公開の削除リンク`)
};

/**
* | output |
* | --- |
* | "Private delete link" |
*
* @param {Logs_Done_Delete_LinkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_done_delete_link = /** @type {((inputs?: Logs_Done_Delete_LinkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Done_Delete_LinkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_done_delete_link(inputs)
	if (locale === "de") return de_logs_done_delete_link(inputs)
	if (locale === "fr") return fr_logs_done_delete_link(inputs)
	if (locale === "it") return it_logs_done_delete_link(inputs)
	if (locale === "nl") return nl_logs_done_delete_link(inputs)
	if (locale === "pl") return pl_logs_done_delete_link(inputs)
	if (locale === "pt") return pt_logs_done_delete_link(inputs)
	if (locale === "ru") return ru_logs_done_delete_link(inputs)
	if (locale === "sv") return sv_logs_done_delete_link(inputs)
	if (locale === "tr") return tr_logs_done_delete_link(inputs)
	if (locale === "zh") return zh_logs_done_delete_link(inputs)
	if (locale === "ja") return ja_logs_done_delete_link(inputs)
	return en_logs_done_delete_link(inputs)
});
