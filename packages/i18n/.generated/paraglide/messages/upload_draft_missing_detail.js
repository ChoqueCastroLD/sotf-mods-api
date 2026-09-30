/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Draft_Missing_DetailInputs */

const en_upload_draft_missing_detail = /** @type {(inputs: Upload_Draft_Missing_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`It was submitted or deleted. Your other drafts are still in the list.`)
};

const es_upload_draft_missing_detail = /** @type {(inputs: Upload_Draft_Missing_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se envió o se borró. Tus otros borradores siguen en la lista.`)
};

const de_upload_draft_missing_detail = /** @type {(inputs: Upload_Draft_Missing_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er wurde eingereicht oder gelöscht. Deine anderen Entwürfe sind weiter in der Liste.`)
};

const fr_upload_draft_missing_detail = /** @type {(inputs: Upload_Draft_Missing_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il a été envoyé ou supprimé. Vos autres brouillons sont toujours dans la liste.`)
};

const it_upload_draft_missing_detail = /** @type {(inputs: Upload_Draft_Missing_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`È stata inviata o eliminata. Le altre bozze sono ancora nell’elenco.`)
};

const nl_upload_draft_missing_detail = /** @type {(inputs: Upload_Draft_Missing_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het is ingediend of verwijderd. Je andere concepten staan nog in de lijst.`)
};

const pl_upload_draft_missing_detail = /** @type {(inputs: Upload_Draft_Missing_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Został wysłany lub usunięty. Pozostałe szkice nadal są na liście.`)
};

const pt_upload_draft_missing_detail = /** @type {(inputs: Upload_Draft_Missing_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ele foi enviado ou excluído. Seus outros rascunhos continuam na lista.`)
};

const ru_upload_draft_missing_detail = /** @type {(inputs: Upload_Draft_Missing_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Его отправили или удалили. Остальные черновики по-прежнему в списке.`)
};

const sv_upload_draft_missing_detail = /** @type {(inputs: Upload_Draft_Missing_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det har skickats in eller tagits bort. Dina andra utkast finns kvar i listan.`)
};

const tr_upload_draft_missing_detail = /** @type {(inputs: Upload_Draft_Missing_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gönderildi ya da silindi. Diğer taslakların listede duruyor.`)
};

const zh_upload_draft_missing_detail = /** @type {(inputs: Upload_Draft_Missing_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`它已被提交或删除。你的其他草稿仍在列表中。`)
};

const ja_upload_draft_missing_detail = /** @type {(inputs: Upload_Draft_Missing_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`送信されたか削除されました。ほかの下書きは一覧に残っています。`)
};

/**
* | output |
* | --- |
* | "It was submitted or deleted. Your other drafts are still in the list." |
*
* @param {Upload_Draft_Missing_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_draft_missing_detail = /** @type {((inputs?: Upload_Draft_Missing_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Draft_Missing_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_draft_missing_detail(inputs)
	if (locale === "de") return de_upload_draft_missing_detail(inputs)
	if (locale === "fr") return fr_upload_draft_missing_detail(inputs)
	if (locale === "it") return it_upload_draft_missing_detail(inputs)
	if (locale === "nl") return nl_upload_draft_missing_detail(inputs)
	if (locale === "pl") return pl_upload_draft_missing_detail(inputs)
	if (locale === "pt") return pt_upload_draft_missing_detail(inputs)
	if (locale === "ru") return ru_upload_draft_missing_detail(inputs)
	if (locale === "sv") return sv_upload_draft_missing_detail(inputs)
	if (locale === "tr") return tr_upload_draft_missing_detail(inputs)
	if (locale === "zh") return zh_upload_draft_missing_detail(inputs)
	if (locale === "ja") return ja_upload_draft_missing_detail(inputs)
	return en_upload_draft_missing_detail(inputs)
});
