/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ status: NonNullable<unknown>, mod: NonNullable<unknown> }} Emails_Notify_Item_StatusInputs */

const en_emails_notify_item_status = /** @type {(inputs: Emails_Notify_Item_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "published") return /** @type {LocalizedString} */ (`${i?.mod} was approved and is live`);
	if (i?.status === "rejected") return /** @type {LocalizedString} */ (`${i?.mod} was not approved`);
	if (i?.status === "pending") return /** @type {LocalizedString} */ (`${i?.mod} needs changes before it can be approved`);
	if (i?.status === "archived") return /** @type {LocalizedString} */ (`${i?.mod} was archived`);
	if (i?.status === "unlisted") return /** @type {LocalizedString} */ (`${i?.mod} was unlisted`);
	if (i?.status === "removed") return /** @type {LocalizedString} */ (`${i?.mod} was removed from SOTF Mods`);
	return /** @type {LocalizedString} */ (`The status of ${i?.mod} changed`)
	
};

const es_emails_notify_item_status = /** @type {(inputs: Emails_Notify_Item_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "published") return /** @type {LocalizedString} */ (`${i?.mod} se aprobó y ya está publicado`);
	if (i?.status === "rejected") return /** @type {LocalizedString} */ (`${i?.mod} no se aprobó`);
	if (i?.status === "pending") return /** @type {LocalizedString} */ (`${i?.mod} necesita cambios antes de poder aprobarse`);
	if (i?.status === "archived") return /** @type {LocalizedString} */ (`${i?.mod} se archivó`);
	if (i?.status === "unlisted") return /** @type {LocalizedString} */ (`${i?.mod} dejó de aparecer en los listados`);
	if (i?.status === "removed") return /** @type {LocalizedString} */ (`${i?.mod} se retiró de SOTF Mods`);
	return /** @type {LocalizedString} */ (`El estado de ${i?.mod} cambió`)
	
};

const de_emails_notify_item_status = /** @type {(inputs: Emails_Notify_Item_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "published") return /** @type {LocalizedString} */ (`${i?.mod} wurde freigegeben und ist online`);
	if (i?.status === "rejected") return /** @type {LocalizedString} */ (`${i?.mod} wurde nicht freigegeben`);
	if (i?.status === "pending") return /** @type {LocalizedString} */ (`${i?.mod} braucht Änderungen, bevor er freigegeben werden kann`);
	if (i?.status === "archived") return /** @type {LocalizedString} */ (`${i?.mod} wurde archiviert`);
	if (i?.status === "unlisted") return /** @type {LocalizedString} */ (`${i?.mod} wird nicht mehr gelistet`);
	if (i?.status === "removed") return /** @type {LocalizedString} */ (`${i?.mod} wurde von SOTF Mods entfernt`);
	return /** @type {LocalizedString} */ (`Der Status von ${i?.mod} hat sich geändert`)
	
};

const fr_emails_notify_item_status = /** @type {(inputs: Emails_Notify_Item_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "published") return /** @type {LocalizedString} */ (`${i?.mod} a été approuvé et est en ligne`);
	if (i?.status === "rejected") return /** @type {LocalizedString} */ (`${i?.mod} n’a pas été approuvé`);
	if (i?.status === "pending") return /** @type {LocalizedString} */ (`${i?.mod} doit être modifié avant de pouvoir être approuvé`);
	if (i?.status === "archived") return /** @type {LocalizedString} */ (`${i?.mod} a été archivé`);
	if (i?.status === "unlisted") return /** @type {LocalizedString} */ (`${i?.mod} n’apparaît plus dans les listes`);
	if (i?.status === "removed") return /** @type {LocalizedString} */ (`${i?.mod} a été retiré de SOTF Mods`);
	return /** @type {LocalizedString} */ (`Le statut de ${i?.mod} a changé`)
	
};

const it_emails_notify_item_status = /** @type {(inputs: Emails_Notify_Item_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "published") return /** @type {LocalizedString} */ (`${i?.mod} è stato approvato ed è online`);
	if (i?.status === "rejected") return /** @type {LocalizedString} */ (`${i?.mod} non è stato approvato`);
	if (i?.status === "pending") return /** @type {LocalizedString} */ (`${i?.mod} richiede modifiche prima di poter essere approvato`);
	if (i?.status === "archived") return /** @type {LocalizedString} */ (`${i?.mod} è stato archiviato`);
	if (i?.status === "unlisted") return /** @type {LocalizedString} */ (`${i?.mod} non compare più negli elenchi`);
	if (i?.status === "removed") return /** @type {LocalizedString} */ (`${i?.mod} è stato rimosso da SOTF Mods`);
	return /** @type {LocalizedString} */ (`Lo stato di ${i?.mod} è cambiato`)
	
};

const nl_emails_notify_item_status = /** @type {(inputs: Emails_Notify_Item_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "published") return /** @type {LocalizedString} */ (`${i?.mod} is goedgekeurd en staat online`);
	if (i?.status === "rejected") return /** @type {LocalizedString} */ (`${i?.mod} is niet goedgekeurd`);
	if (i?.status === "pending") return /** @type {LocalizedString} */ (`${i?.mod} heeft wijzigingen nodig voordat hij kan worden goedgekeurd`);
	if (i?.status === "archived") return /** @type {LocalizedString} */ (`${i?.mod} is gearchiveerd`);
	if (i?.status === "unlisted") return /** @type {LocalizedString} */ (`${i?.mod} staat niet meer in de lijsten`);
	if (i?.status === "removed") return /** @type {LocalizedString} */ (`${i?.mod} is van SOTF Mods verwijderd`);
	return /** @type {LocalizedString} */ (`De status van ${i?.mod} is gewijzigd`)
	
};

const pl_emails_notify_item_status = /** @type {(inputs: Emails_Notify_Item_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "published") return /** @type {LocalizedString} */ (`${i?.mod} został zatwierdzony i jest już dostępny`);
	if (i?.status === "rejected") return /** @type {LocalizedString} */ (`${i?.mod} nie został zatwierdzony`);
	if (i?.status === "pending") return /** @type {LocalizedString} */ (`${i?.mod} wymaga zmian przed zatwierdzeniem`);
	if (i?.status === "archived") return /** @type {LocalizedString} */ (`${i?.mod} został zarchiwizowany`);
	if (i?.status === "unlisted") return /** @type {LocalizedString} */ (`${i?.mod} nie jest już widoczny na listach`);
	if (i?.status === "removed") return /** @type {LocalizedString} */ (`${i?.mod} został usunięty z SOTF Mods`);
	return /** @type {LocalizedString} */ (`Status ${i?.mod} się zmienił`)
	
};

const pt_emails_notify_item_status = /** @type {(inputs: Emails_Notify_Item_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "published") return /** @type {LocalizedString} */ (`${i?.mod} foi aprovado e já está no ar`);
	if (i?.status === "rejected") return /** @type {LocalizedString} */ (`${i?.mod} não foi aprovado`);
	if (i?.status === "pending") return /** @type {LocalizedString} */ (`${i?.mod} precisa de alterações antes de ser aprovado`);
	if (i?.status === "archived") return /** @type {LocalizedString} */ (`${i?.mod} foi arquivado`);
	if (i?.status === "unlisted") return /** @type {LocalizedString} */ (`${i?.mod} deixou de aparecer nas listas`);
	if (i?.status === "removed") return /** @type {LocalizedString} */ (`${i?.mod} foi removido do SOTF Mods`);
	return /** @type {LocalizedString} */ (`O status de ${i?.mod} mudou`)
	
};

const ru_emails_notify_item_status = /** @type {(inputs: Emails_Notify_Item_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "published") return /** @type {LocalizedString} */ (`${i?.mod} одобрен и опубликован`);
	if (i?.status === "rejected") return /** @type {LocalizedString} */ (`${i?.mod} не одобрен`);
	if (i?.status === "pending") return /** @type {LocalizedString} */ (`${i?.mod} нужно доработать перед одобрением`);
	if (i?.status === "archived") return /** @type {LocalizedString} */ (`${i?.mod} отправлен в архив`);
	if (i?.status === "unlisted") return /** @type {LocalizedString} */ (`${i?.mod} больше не показывается в списках`);
	if (i?.status === "removed") return /** @type {LocalizedString} */ (`${i?.mod} удалён с SOTF Mods`);
	return /** @type {LocalizedString} */ (`Статус ${i?.mod} изменился`)
	
};

const sv_emails_notify_item_status = /** @type {(inputs: Emails_Notify_Item_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "published") return /** @type {LocalizedString} */ (`${i?.mod} har godkänts och är publicerad`);
	if (i?.status === "rejected") return /** @type {LocalizedString} */ (`${i?.mod} godkändes inte`);
	if (i?.status === "pending") return /** @type {LocalizedString} */ (`${i?.mod} behöver ändras innan den kan godkännas`);
	if (i?.status === "archived") return /** @type {LocalizedString} */ (`${i?.mod} har arkiverats`);
	if (i?.status === "unlisted") return /** @type {LocalizedString} */ (`${i?.mod} visas inte längre i listorna`);
	if (i?.status === "removed") return /** @type {LocalizedString} */ (`${i?.mod} har tagits bort från SOTF Mods`);
	return /** @type {LocalizedString} */ (`Statusen för ${i?.mod} har ändrats`)
	
};

const tr_emails_notify_item_status = /** @type {(inputs: Emails_Notify_Item_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "published") return /** @type {LocalizedString} */ (`${i?.mod} onaylandı ve yayında`);
	if (i?.status === "rejected") return /** @type {LocalizedString} */ (`${i?.mod} onaylanmadı`);
	if (i?.status === "pending") return /** @type {LocalizedString} */ (`${i?.mod} onaylanmadan önce değişiklik gerektiriyor`);
	if (i?.status === "archived") return /** @type {LocalizedString} */ (`${i?.mod} arşivlendi`);
	if (i?.status === "unlisted") return /** @type {LocalizedString} */ (`${i?.mod} artık listelerde görünmüyor`);
	if (i?.status === "removed") return /** @type {LocalizedString} */ (`${i?.mod} SOTF Mods’tan kaldırıldı`);
	return /** @type {LocalizedString} */ (`${i?.mod} modunun durumu değişti`)
	
};

const zh_emails_notify_item_status = /** @type {(inputs: Emails_Notify_Item_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "published") return /** @type {LocalizedString} */ (`${i?.mod} 已通过审核并上线`);
	if (i?.status === "rejected") return /** @type {LocalizedString} */ (`${i?.mod} 未通过审核`);
	if (i?.status === "pending") return /** @type {LocalizedString} */ (`${i?.mod} 需要修改后才能通过审核`);
	if (i?.status === "archived") return /** @type {LocalizedString} */ (`${i?.mod} 已归档`);
	if (i?.status === "unlisted") return /** @type {LocalizedString} */ (`${i?.mod} 已不再显示在列表中`);
	if (i?.status === "removed") return /** @type {LocalizedString} */ (`${i?.mod} 已从 SOTF Mods 移除`);
	return /** @type {LocalizedString} */ (`${i?.mod} 的状态已变更`)
	
};

const ja_emails_notify_item_status = /** @type {(inputs: Emails_Notify_Item_StatusInputs) => LocalizedString} */ (i) => {
	if (i?.status === "published") return /** @type {LocalizedString} */ (`${i?.mod} が承認され、公開されました`);
	if (i?.status === "rejected") return /** @type {LocalizedString} */ (`${i?.mod} は承認されませんでした`);
	if (i?.status === "pending") return /** @type {LocalizedString} */ (`${i?.mod} は承認前に修正が必要です`);
	if (i?.status === "archived") return /** @type {LocalizedString} */ (`${i?.mod} がアーカイブされました`);
	if (i?.status === "unlisted") return /** @type {LocalizedString} */ (`${i?.mod} は一覧に表示されなくなりました`);
	if (i?.status === "removed") return /** @type {LocalizedString} */ (`${i?.mod} は SOTF Mods から削除されました`);
	return /** @type {LocalizedString} */ (`${i?.mod} のステータスが変わりました`)
	
};

/**
* | status | output |
* | --- | --- |
* | "published" | "{mod} was approved and is live" |
* | "rejected" | "{mod} was not approved" |
* | "pending" | "{mod} needs changes before it can be approved" |
* | "archived" | "{mod} was archived" |
* | "unlisted" | "{mod} was unlisted" |
* | "removed" | "{mod} was removed from SOTF Mods" |
* | * | "The status of {mod} changed" |
*
* @param {Emails_Notify_Item_StatusInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_item_status = /** @type {((inputs: Emails_Notify_Item_StatusInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_StatusInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_item_status(inputs)
	if (locale === "de") return de_emails_notify_item_status(inputs)
	if (locale === "fr") return fr_emails_notify_item_status(inputs)
	if (locale === "it") return it_emails_notify_item_status(inputs)
	if (locale === "nl") return nl_emails_notify_item_status(inputs)
	if (locale === "pl") return pl_emails_notify_item_status(inputs)
	if (locale === "pt") return pt_emails_notify_item_status(inputs)
	if (locale === "ru") return ru_emails_notify_item_status(inputs)
	if (locale === "sv") return sv_emails_notify_item_status(inputs)
	if (locale === "tr") return tr_emails_notify_item_status(inputs)
	if (locale === "zh") return zh_emails_notify_item_status(inputs)
	if (locale === "ja") return ja_emails_notify_item_status(inputs)
	return en_emails_notify_item_status(inputs)
});
