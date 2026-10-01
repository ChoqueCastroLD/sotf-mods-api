/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Done_Delete_HintInputs */

const en_logs_done_delete_hint = /** @type {(inputs: Logs_Done_Delete_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keep it to delete the log early. Anyone with this link can delete the log.`)
};

const es_logs_done_delete_hint = /** @type {(inputs: Logs_Done_Delete_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guárdalo para borrar el log antes de tiempo. Cualquiera con este enlace puede borrar el log.`)
};

const de_logs_done_delete_hint = /** @type {(inputs: Logs_Done_Delete_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bewahre ihn auf, um das Log vorzeitig zu löschen. Jeder mit diesem Link kann das Log löschen.`)
};

const fr_logs_done_delete_hint = /** @type {(inputs: Logs_Done_Delete_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conservez-le pour supprimer le log plus tôt. Toute personne ayant ce lien peut supprimer le log.`)
};

const it_logs_done_delete_hint = /** @type {(inputs: Logs_Done_Delete_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conservalo per eliminare il log in anticipo. Chiunque abbia questo link può eliminare il log.`)
};

const nl_logs_done_delete_hint = /** @type {(inputs: Logs_Done_Delete_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bewaar hem om de log eerder te verwijderen. Iedereen met deze link kan de log verwijderen.`)
};

const pl_logs_done_delete_hint = /** @type {(inputs: Logs_Done_Delete_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zachowaj go, aby usunąć log wcześniej. Każdy, kto ma ten link, może usunąć log.`)
};

const pt_logs_done_delete_hint = /** @type {(inputs: Logs_Done_Delete_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guarde-a para apagar o log mais cedo. Qualquer pessoa com esta ligação pode apagar o log.`)
};

const ru_logs_done_delete_hint = /** @type {(inputs: Logs_Done_Delete_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сохраните её, чтобы удалить лог досрочно. Любой, у кого есть эта ссылка, может удалить лог.`)
};

const sv_logs_done_delete_hint = /** @type {(inputs: Logs_Done_Delete_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spara den för att radera loggen i förtid. Alla som har länken kan radera loggen.`)
};

const tr_logs_done_delete_hint = /** @type {(inputs: Logs_Done_Delete_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logu erken silmek için saklayın. Bu bağlantıya sahip herkes logu silebilir.`)
};

const zh_logs_done_delete_hint = /** @type {(inputs: Logs_Done_Delete_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请保存它，以便提前删除日志。任何拥有此链接的人都可以删除日志。`)
};

const ja_logs_done_delete_hint = /** @type {(inputs: Logs_Done_Delete_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログを早めに削除するために保管してください。このリンクを知っている人は誰でもログを削除できます。`)
};

/**
* | output |
* | --- |
* | "Keep it to delete the log early. Anyone with this link can delete the log." |
*
* @param {Logs_Done_Delete_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_done_delete_hint = /** @type {((inputs?: Logs_Done_Delete_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Done_Delete_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_done_delete_hint(inputs)
	if (locale === "de") return de_logs_done_delete_hint(inputs)
	if (locale === "fr") return fr_logs_done_delete_hint(inputs)
	if (locale === "it") return it_logs_done_delete_hint(inputs)
	if (locale === "nl") return nl_logs_done_delete_hint(inputs)
	if (locale === "pl") return pl_logs_done_delete_hint(inputs)
	if (locale === "pt") return pt_logs_done_delete_hint(inputs)
	if (locale === "ru") return ru_logs_done_delete_hint(inputs)
	if (locale === "sv") return sv_logs_done_delete_hint(inputs)
	if (locale === "tr") return tr_logs_done_delete_hint(inputs)
	if (locale === "zh") return zh_logs_done_delete_hint(inputs)
	if (locale === "ja") return ja_logs_done_delete_hint(inputs)
	return en_logs_done_delete_hint(inputs)
});
