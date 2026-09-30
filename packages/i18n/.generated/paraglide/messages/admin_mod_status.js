/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ status: NonNullable<unknown> }} Admin_Mod_StatusInputs */

const en_admin_mod_status = /** @type {(inputs: Admin_Mod_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "pending") return /** @type {LocalizedString} */ (`Pending`);
	if (i?.status === "unlisted") return /** @type {LocalizedString} */ (`Unlisted`);
	if (i?.status === "archived") return /** @type {LocalizedString} */ (`Archived`);
	if (i?.status === "rejected") return /** @type {LocalizedString} */ (`Rejected`);
	if (i?.status === "removed") return /** @type {LocalizedString} */ (`Removed`);
	if (i?.status === "draft") return /** @type {LocalizedString} */ (`Draft`);
	return /** @type {LocalizedString} */ (`Not public`)
	
};

const es_admin_mod_status = /** @type {(inputs: Admin_Mod_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "pending") return /** @type {LocalizedString} */ (`Pendiente`);
	if (i?.status === "unlisted") return /** @type {LocalizedString} */ (`Oculto`);
	if (i?.status === "archived") return /** @type {LocalizedString} */ (`Archivado`);
	if (i?.status === "rejected") return /** @type {LocalizedString} */ (`Rechazado`);
	if (i?.status === "removed") return /** @type {LocalizedString} */ (`Retirado`);
	if (i?.status === "draft") return /** @type {LocalizedString} */ (`Borrador`);
	return /** @type {LocalizedString} */ (`No público`)
	
};

const de_admin_mod_status = /** @type {(inputs: Admin_Mod_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "pending") return /** @type {LocalizedString} */ (`Ausstehend`);
	if (i?.status === "unlisted") return /** @type {LocalizedString} */ (`Nicht gelistet`);
	if (i?.status === "archived") return /** @type {LocalizedString} */ (`Archiviert`);
	if (i?.status === "rejected") return /** @type {LocalizedString} */ (`Abgelehnt`);
	if (i?.status === "removed") return /** @type {LocalizedString} */ (`Entfernt`);
	if (i?.status === "draft") return /** @type {LocalizedString} */ (`Entwurf`);
	return /** @type {LocalizedString} */ (`Nicht öffentlich`)
	
};

const fr_admin_mod_status = /** @type {(inputs: Admin_Mod_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "pending") return /** @type {LocalizedString} */ (`En attente`);
	if (i?.status === "unlisted") return /** @type {LocalizedString} */ (`Non répertorié`);
	if (i?.status === "archived") return /** @type {LocalizedString} */ (`Archivé`);
	if (i?.status === "rejected") return /** @type {LocalizedString} */ (`Refusé`);
	if (i?.status === "removed") return /** @type {LocalizedString} */ (`Retiré`);
	if (i?.status === "draft") return /** @type {LocalizedString} */ (`Brouillon`);
	return /** @type {LocalizedString} */ (`Non public`)
	
};

const it_admin_mod_status = /** @type {(inputs: Admin_Mod_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "pending") return /** @type {LocalizedString} */ (`In attesa`);
	if (i?.status === "unlisted") return /** @type {LocalizedString} */ (`Non in elenco`);
	if (i?.status === "archived") return /** @type {LocalizedString} */ (`Archiviato`);
	if (i?.status === "rejected") return /** @type {LocalizedString} */ (`Rifiutato`);
	if (i?.status === "removed") return /** @type {LocalizedString} */ (`Rimosso`);
	if (i?.status === "draft") return /** @type {LocalizedString} */ (`Bozza`);
	return /** @type {LocalizedString} */ (`Non pubblico`)
	
};

const nl_admin_mod_status = /** @type {(inputs: Admin_Mod_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "pending") return /** @type {LocalizedString} */ (`In afwachting`);
	if (i?.status === "unlisted") return /** @type {LocalizedString} */ (`Niet vermeld`);
	if (i?.status === "archived") return /** @type {LocalizedString} */ (`Gearchiveerd`);
	if (i?.status === "rejected") return /** @type {LocalizedString} */ (`Afgewezen`);
	if (i?.status === "removed") return /** @type {LocalizedString} */ (`Verwijderd`);
	if (i?.status === "draft") return /** @type {LocalizedString} */ (`Concept`);
	return /** @type {LocalizedString} */ (`Niet openbaar`)
	
};

const pl_admin_mod_status = /** @type {(inputs: Admin_Mod_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "pending") return /** @type {LocalizedString} */ (`Oczekuje`);
	if (i?.status === "unlisted") return /** @type {LocalizedString} */ (`Niewidoczny na liście`);
	if (i?.status === "archived") return /** @type {LocalizedString} */ (`Zarchiwizowany`);
	if (i?.status === "rejected") return /** @type {LocalizedString} */ (`Odrzucony`);
	if (i?.status === "removed") return /** @type {LocalizedString} */ (`Usunięty`);
	if (i?.status === "draft") return /** @type {LocalizedString} */ (`Szkic`);
	return /** @type {LocalizedString} */ (`Niepubliczny`)
	
};

const pt_admin_mod_status = /** @type {(inputs: Admin_Mod_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "pending") return /** @type {LocalizedString} */ (`Pendente`);
	if (i?.status === "unlisted") return /** @type {LocalizedString} */ (`Não listado`);
	if (i?.status === "archived") return /** @type {LocalizedString} */ (`Arquivado`);
	if (i?.status === "rejected") return /** @type {LocalizedString} */ (`Rejeitado`);
	if (i?.status === "removed") return /** @type {LocalizedString} */ (`Removido`);
	if (i?.status === "draft") return /** @type {LocalizedString} */ (`Rascunho`);
	return /** @type {LocalizedString} */ (`Não público`)
	
};

const ru_admin_mod_status = /** @type {(inputs: Admin_Mod_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "pending") return /** @type {LocalizedString} */ (`На проверке`);
	if (i?.status === "unlisted") return /** @type {LocalizedString} */ (`Скрыт из списков`);
	if (i?.status === "archived") return /** @type {LocalizedString} */ (`В архиве`);
	if (i?.status === "rejected") return /** @type {LocalizedString} */ (`Отклонён`);
	if (i?.status === "removed") return /** @type {LocalizedString} */ (`Удалён`);
	if (i?.status === "draft") return /** @type {LocalizedString} */ (`Черновик`);
	return /** @type {LocalizedString} */ (`Не опубликован`)
	
};

const sv_admin_mod_status = /** @type {(inputs: Admin_Mod_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "pending") return /** @type {LocalizedString} */ (`Väntar`);
	if (i?.status === "unlisted") return /** @type {LocalizedString} */ (`Olistad`);
	if (i?.status === "archived") return /** @type {LocalizedString} */ (`Arkiverad`);
	if (i?.status === "rejected") return /** @type {LocalizedString} */ (`Avvisad`);
	if (i?.status === "removed") return /** @type {LocalizedString} */ (`Borttagen`);
	if (i?.status === "draft") return /** @type {LocalizedString} */ (`Utkast`);
	return /** @type {LocalizedString} */ (`Inte offentlig`)
	
};

const tr_admin_mod_status = /** @type {(inputs: Admin_Mod_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "pending") return /** @type {LocalizedString} */ (`Beklemede`);
	if (i?.status === "unlisted") return /** @type {LocalizedString} */ (`Listelenmemiş`);
	if (i?.status === "archived") return /** @type {LocalizedString} */ (`Arşivlendi`);
	if (i?.status === "rejected") return /** @type {LocalizedString} */ (`Reddedildi`);
	if (i?.status === "removed") return /** @type {LocalizedString} */ (`Kaldırıldı`);
	if (i?.status === "draft") return /** @type {LocalizedString} */ (`Taslak`);
	return /** @type {LocalizedString} */ (`Herkese açık değil`)
	
};

const zh_admin_mod_status = /** @type {(inputs: Admin_Mod_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "pending") return /** @type {LocalizedString} */ (`待审核`);
	if (i?.status === "unlisted") return /** @type {LocalizedString} */ (`未列出`);
	if (i?.status === "archived") return /** @type {LocalizedString} */ (`已归档`);
	if (i?.status === "rejected") return /** @type {LocalizedString} */ (`已拒绝`);
	if (i?.status === "removed") return /** @type {LocalizedString} */ (`已移除`);
	if (i?.status === "draft") return /** @type {LocalizedString} */ (`草稿`);
	return /** @type {LocalizedString} */ (`未公开`)
	
};

const ja_admin_mod_status = /** @type {(inputs: Admin_Mod_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "pending") return /** @type {LocalizedString} */ (`審査待ち`);
	if (i?.status === "unlisted") return /** @type {LocalizedString} */ (`非表示`);
	if (i?.status === "archived") return /** @type {LocalizedString} */ (`アーカイブ済み`);
	if (i?.status === "rejected") return /** @type {LocalizedString} */ (`却下`);
	if (i?.status === "removed") return /** @type {LocalizedString} */ (`削除済み`);
	if (i?.status === "draft") return /** @type {LocalizedString} */ (`下書き`);
	return /** @type {LocalizedString} */ (`非公開`)
	
};

/**
* | status | output |
* | --- | --- |
* | "pending" | "Pending" |
* | "unlisted" | "Unlisted" |
* | "archived" | "Archived" |
* | "rejected" | "Rejected" |
* | "removed" | "Removed" |
* | "draft" | "Draft" |
* | * | "Not public" |
*
* @param {Admin_Mod_StatusInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_mod_status = /** @type {((inputs: Admin_Mod_StatusInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Mod_StatusInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_mod_status(inputs)
	if (locale === "de") return de_admin_mod_status(inputs)
	if (locale === "fr") return fr_admin_mod_status(inputs)
	if (locale === "it") return it_admin_mod_status(inputs)
	if (locale === "nl") return nl_admin_mod_status(inputs)
	if (locale === "pl") return pl_admin_mod_status(inputs)
	if (locale === "pt") return pt_admin_mod_status(inputs)
	if (locale === "ru") return ru_admin_mod_status(inputs)
	if (locale === "sv") return sv_admin_mod_status(inputs)
	if (locale === "tr") return tr_admin_mod_status(inputs)
	if (locale === "zh") return zh_admin_mod_status(inputs)
	if (locale === "ja") return ja_admin_mod_status(inputs)
	return en_admin_mod_status(inputs)
});
