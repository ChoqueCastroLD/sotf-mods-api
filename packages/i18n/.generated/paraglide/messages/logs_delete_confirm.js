/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Delete_ConfirmInputs */

const en_logs_delete_confirm = /** @type {(inputs: Logs_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete this log now? The link stops working immediately.`)
};

const es_logs_delete_confirm = /** @type {(inputs: Logs_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Borrar este log ahora? El enlace dejará de funcionar de inmediato.`)
};

const de_logs_delete_confirm = /** @type {(inputs: Logs_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieses Log jetzt löschen? Der Link funktioniert sofort nicht mehr.`)
};

const fr_logs_delete_confirm = /** @type {(inputs: Logs_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer ce log maintenant ? Le lien cessera de fonctionner immédiatement.`)
};

const it_logs_delete_confirm = /** @type {(inputs: Logs_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eliminare ora questo log? Il link smetterà subito di funzionare.`)
};

const nl_logs_delete_confirm = /** @type {(inputs: Logs_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze log nu verwijderen? De link werkt meteen niet meer.`)
};

const pl_logs_delete_confirm = /** @type {(inputs: Logs_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usunąć ten log teraz? Link natychmiast przestanie działać.`)
};

const pt_logs_delete_confirm = /** @type {(inputs: Logs_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apagar este log agora? A ligação deixa de funcionar de imediato.`)
};

const ru_logs_delete_confirm = /** @type {(inputs: Logs_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалить этот лог сейчас? Ссылка сразу перестанет работать.`)
};

const sv_logs_delete_confirm = /** @type {(inputs: Logs_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Radera loggen nu? Länken slutar fungera direkt.`)
};

const tr_logs_delete_confirm = /** @type {(inputs: Logs_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu log şimdi silinsin mi? Bağlantı hemen çalışmayı bırakır.`)
};

const zh_logs_delete_confirm = /** @type {(inputs: Logs_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`现在删除此日志吗？链接将立即失效。`)
};

const ja_logs_delete_confirm = /** @type {(inputs: Logs_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このログを今すぐ削除しますか？リンクはすぐに使えなくなります。`)
};

/**
* | output |
* | --- |
* | "Delete this log now? The link stops working immediately." |
*
* @param {Logs_Delete_ConfirmInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_delete_confirm = /** @type {((inputs?: Logs_Delete_ConfirmInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Delete_ConfirmInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_delete_confirm(inputs)
	if (locale === "de") return de_logs_delete_confirm(inputs)
	if (locale === "fr") return fr_logs_delete_confirm(inputs)
	if (locale === "it") return it_logs_delete_confirm(inputs)
	if (locale === "nl") return nl_logs_delete_confirm(inputs)
	if (locale === "pl") return pl_logs_delete_confirm(inputs)
	if (locale === "pt") return pt_logs_delete_confirm(inputs)
	if (locale === "ru") return ru_logs_delete_confirm(inputs)
	if (locale === "sv") return sv_logs_delete_confirm(inputs)
	if (locale === "tr") return tr_logs_delete_confirm(inputs)
	if (locale === "zh") return zh_logs_delete_confirm(inputs)
	if (locale === "ja") return ja_logs_delete_confirm(inputs)
	return en_logs_delete_confirm(inputs)
});
