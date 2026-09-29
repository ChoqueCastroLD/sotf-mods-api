/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Delete_Mod_ConfirmInputs */

const en_common_delete_mod_confirm = /** @type {(inputs: Common_Delete_Mod_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Type the mod name to delete it forever. Download history is kept for stats.`)
};

const es_common_delete_mod_confirm = /** @type {(inputs: Common_Delete_Mod_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escribe el nombre del mod para borrarlo para siempre. El historial de descargas se conserva para estadísticas.`)
};

const de_common_delete_mod_confirm = /** @type {(inputs: Common_Delete_Mod_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gib den Namen des Mods ein, um ihn endgültig zu löschen. Der Download-Verlauf bleibt für die Statistik erhalten.`)
};

const fr_common_delete_mod_confirm = /** @type {(inputs: Common_Delete_Mod_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saisissez le nom du mod pour le supprimer définitivement. L’historique des téléchargements est conservé pour les statistiques.`)
};

const it_common_delete_mod_confirm = /** @type {(inputs: Common_Delete_Mod_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scrivi il nome della mod per eliminarla per sempre. La cronologia dei download viene conservata per le statistiche.`)
};

const nl_common_delete_mod_confirm = /** @type {(inputs: Common_Delete_Mod_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Typ de naam van de mod om hem definitief te verwijderen. De downloadgeschiedenis blijft bewaard voor statistieken.`)
};

const pl_common_delete_mod_confirm = /** @type {(inputs: Common_Delete_Mod_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wpisz nazwę moda, aby usunąć go na zawsze. Historia pobrań zostaje zachowana na potrzeby statystyk.`)
};

const pt_common_delete_mod_confirm = /** @type {(inputs: Common_Delete_Mod_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Digite o nome do mod para excluí-lo para sempre. O histórico de downloads é mantido para as estatísticas.`)
};

const ru_common_delete_mod_confirm = /** @type {(inputs: Common_Delete_Mod_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Введите название мода, чтобы удалить его навсегда. История скачиваний сохранится для статистики.`)
};

const sv_common_delete_mod_confirm = /** @type {(inputs: Common_Delete_Mod_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skriv moddens namn för att ta bort den för alltid. Nedladdningshistoriken sparas för statistik.`)
};

const tr_common_delete_mod_confirm = /** @type {(inputs: Common_Delete_Mod_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modu kalıcı olarak silmek için adını yaz. İndirme geçmişi istatistikler için saklanır.`)
};

const zh_common_delete_mod_confirm = /** @type {(inputs: Common_Delete_Mod_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`输入模组名称以永久删除。下载记录会保留用于统计。`)
};

const ja_common_delete_mod_confirm = /** @type {(inputs: Common_Delete_Mod_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD を完全に削除するには、MOD 名を入力してください。ダウンロード履歴は統計のために保持されます。`)
};

/**
* | output |
* | --- |
* | "Type the mod name to delete it forever. Download history is kept for stats." |
*
* @param {Common_Delete_Mod_ConfirmInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_delete_mod_confirm = /** @type {((inputs?: Common_Delete_Mod_ConfirmInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Delete_Mod_ConfirmInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_delete_mod_confirm(inputs)
	if (locale === "de") return de_common_delete_mod_confirm(inputs)
	if (locale === "fr") return fr_common_delete_mod_confirm(inputs)
	if (locale === "it") return it_common_delete_mod_confirm(inputs)
	if (locale === "nl") return nl_common_delete_mod_confirm(inputs)
	if (locale === "pl") return pl_common_delete_mod_confirm(inputs)
	if (locale === "pt") return pt_common_delete_mod_confirm(inputs)
	if (locale === "ru") return ru_common_delete_mod_confirm(inputs)
	if (locale === "sv") return sv_common_delete_mod_confirm(inputs)
	if (locale === "tr") return tr_common_delete_mod_confirm(inputs)
	if (locale === "zh") return zh_common_delete_mod_confirm(inputs)
	if (locale === "ja") return ja_common_delete_mod_confirm(inputs)
	return en_common_delete_mod_confirm(inputs)
});
