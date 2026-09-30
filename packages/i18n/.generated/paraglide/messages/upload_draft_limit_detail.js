/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Draft_Limit_DetailInputs */

const en_upload_draft_limit_detail = /** @type {(inputs: Upload_Draft_Limit_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete a draft you no longer need to start a new one.`)
};

const es_upload_draft_limit_detail = /** @type {(inputs: Upload_Draft_Limit_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Borra uno que ya no necesites para empezar otro.`)
};

const de_upload_draft_limit_detail = /** @type {(inputs: Upload_Draft_Limit_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lösche einen Entwurf, den du nicht mehr brauchst, um einen neuen zu beginnen.`)
};

const fr_upload_draft_limit_detail = /** @type {(inputs: Upload_Draft_Limit_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimez un brouillon dont vous n’avez plus besoin pour en commencer un nouveau.`)
};

const it_upload_draft_limit_detail = /** @type {(inputs: Upload_Draft_Limit_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elimina una bozza che non ti serve più per iniziarne una nuova.`)
};

const nl_upload_draft_limit_detail = /** @type {(inputs: Upload_Draft_Limit_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwijder een concept dat je niet meer nodig hebt om een nieuw te beginnen.`)
};

const pl_upload_draft_limit_detail = /** @type {(inputs: Upload_Draft_Limit_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuń szkic, którego już nie potrzebujesz, aby zacząć nowy.`)
};

const pt_upload_draft_limit_detail = /** @type {(inputs: Upload_Draft_Limit_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exclua um rascunho de que não precisa mais para começar outro.`)
};

const ru_upload_draft_limit_detail = /** @type {(inputs: Upload_Draft_Limit_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалите ненужный черновик, чтобы начать новый.`)
};

const sv_upload_draft_limit_detail = /** @type {(inputs: Upload_Draft_Limit_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta bort ett utkast du inte längre behöver för att börja ett nytt.`)
};

const tr_upload_draft_limit_detail = /** @type {(inputs: Upload_Draft_Limit_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yenisine başlamak için artık gerekmeyen bir taslağı sil.`)
};

const zh_upload_draft_limit_detail = /** @type {(inputs: Upload_Draft_Limit_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除一个不再需要的草稿，才能开始新的。`)
};

const ja_upload_draft_limit_detail = /** @type {(inputs: Upload_Draft_Limit_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しく始めるには、不要な下書きを削除してください。`)
};

/**
* | output |
* | --- |
* | "Delete a draft you no longer need to start a new one." |
*
* @param {Upload_Draft_Limit_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_draft_limit_detail = /** @type {((inputs?: Upload_Draft_Limit_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Draft_Limit_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_draft_limit_detail(inputs)
	if (locale === "de") return de_upload_draft_limit_detail(inputs)
	if (locale === "fr") return fr_upload_draft_limit_detail(inputs)
	if (locale === "it") return it_upload_draft_limit_detail(inputs)
	if (locale === "nl") return nl_upload_draft_limit_detail(inputs)
	if (locale === "pl") return pl_upload_draft_limit_detail(inputs)
	if (locale === "pt") return pt_upload_draft_limit_detail(inputs)
	if (locale === "ru") return ru_upload_draft_limit_detail(inputs)
	if (locale === "sv") return sv_upload_draft_limit_detail(inputs)
	if (locale === "tr") return tr_upload_draft_limit_detail(inputs)
	if (locale === "zh") return zh_upload_draft_limit_detail(inputs)
	if (locale === "ja") return ja_upload_draft_limit_detail(inputs)
	return en_upload_draft_limit_detail(inputs)
});
