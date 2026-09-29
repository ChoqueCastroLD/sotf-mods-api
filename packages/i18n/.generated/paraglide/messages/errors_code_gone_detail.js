/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Code_Gone_DetailInputs */

const en_errors_code_gone_detail = /** @type {(inputs: Errors_Code_Gone_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This was removed and won’t come back.`)
};

const es_errors_code_gone_detail = /** @type {(inputs: Errors_Code_Gone_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se eliminó y no va a volver.`)
};

const de_errors_code_gone_detail = /** @type {(inputs: Errors_Code_Gone_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das wurde entfernt und kommt nicht zurück.`)
};

const fr_errors_code_gone_detail = /** @type {(inputs: Errors_Code_Gone_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce contenu a été supprimé et ne reviendra pas.`)
};

const it_errors_code_gone_detail = /** @type {(inputs: Errors_Code_Gone_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`È stato rimosso e non tornerà.`)
};

const nl_errors_code_gone_detail = /** @type {(inputs: Errors_Code_Gone_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit is verwijderd en komt niet terug.`)
};

const pl_errors_code_gone_detail = /** @type {(inputs: Errors_Code_Gone_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To zostało usunięte i nie wróci.`)
};

const pt_errors_code_gone_detail = /** @type {(inputs: Errors_Code_Gone_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Isto foi removido e não vai voltar.`)
};

const ru_errors_code_gone_detail = /** @type {(inputs: Errors_Code_Gone_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Это удалили, и оно не вернётся.`)
};

const sv_errors_code_gone_detail = /** @type {(inputs: Errors_Code_Gone_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det här har tagits bort och kommer inte tillbaka.`)
};

const tr_errors_code_gone_detail = /** @type {(inputs: Errors_Code_Gone_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu kaldırıldı ve geri gelmeyecek.`)
};

const zh_errors_code_gone_detail = /** @type {(inputs: Errors_Code_Gone_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`该内容已被移除，不会再恢复。`)
};

const ja_errors_code_gone_detail = /** @type {(inputs: Errors_Code_Gone_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このコンテンツは削除され、元に戻ることはありません。`)
};

/**
* | output |
* | --- |
* | "This was removed and won’t come back." |
*
* @param {Errors_Code_Gone_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_code_gone_detail = /** @type {((inputs?: Errors_Code_Gone_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Gone_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_code_gone_detail(inputs)
	if (locale === "de") return de_errors_code_gone_detail(inputs)
	if (locale === "fr") return fr_errors_code_gone_detail(inputs)
	if (locale === "it") return it_errors_code_gone_detail(inputs)
	if (locale === "nl") return nl_errors_code_gone_detail(inputs)
	if (locale === "pl") return pl_errors_code_gone_detail(inputs)
	if (locale === "pt") return pt_errors_code_gone_detail(inputs)
	if (locale === "ru") return ru_errors_code_gone_detail(inputs)
	if (locale === "sv") return sv_errors_code_gone_detail(inputs)
	if (locale === "tr") return tr_errors_code_gone_detail(inputs)
	if (locale === "zh") return zh_errors_code_gone_detail(inputs)
	if (locale === "ja") return ja_errors_code_gone_detail(inputs)
	return en_errors_code_gone_detail(inputs)
});
