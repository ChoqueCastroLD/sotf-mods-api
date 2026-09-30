/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Ready_DetailInputs */

const en_upload_ready_detail = /** @type {(inputs: Upload_Ready_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Everything the automatic checks look for is in order.`)
};

const es_upload_ready_detail = /** @type {(inputs: Upload_Ready_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todo lo que miran las comprobaciones automáticas está en orden.`)
};

const de_upload_ready_detail = /** @type {(inputs: Upload_Ready_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles, worauf die automatischen Checks achten, ist in Ordnung.`)
};

const fr_upload_ready_detail = /** @type {(inputs: Upload_Ready_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout ce que regardent les vérifications automatiques est en ordre.`)
};

const it_upload_ready_detail = /** @type {(inputs: Upload_Ready_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutto ciò che verificano i controlli automatici è in ordine.`)
};

const nl_upload_ready_detail = /** @type {(inputs: Upload_Ready_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles waar de automatische checks naar kijken is in orde.`)
};

const pl_upload_ready_detail = /** @type {(inputs: Upload_Ready_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystko, co sprawdzają automatyczne kontrole, jest w porządku.`)
};

const pt_upload_ready_detail = /** @type {(inputs: Upload_Ready_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tudo o que as verificações automáticas conferem está em ordem.`)
};

const ru_upload_ready_detail = /** @type {(inputs: Upload_Ready_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Всё, что смотрят автоматические проверки, в порядке.`)
};

const sv_upload_ready_detail = /** @type {(inputs: Upload_Ready_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Allt som de automatiska kontrollerna tittar på är i ordning.`)
};

const tr_upload_ready_detail = /** @type {(inputs: Upload_Ready_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otomatik kontrollerin baktığı her şey yolunda.`)
};

const zh_upload_ready_detail = /** @type {(inputs: Upload_Ready_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自动检查的所有项目都没有问题。`)
};

const ja_upload_ready_detail = /** @type {(inputs: Upload_Ready_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自動チェックの項目はすべて問題ありません。`)
};

/**
* | output |
* | --- |
* | "Everything the automatic checks look for is in order." |
*
* @param {Upload_Ready_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_ready_detail = /** @type {((inputs?: Upload_Ready_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Ready_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_ready_detail(inputs)
	if (locale === "de") return de_upload_ready_detail(inputs)
	if (locale === "fr") return fr_upload_ready_detail(inputs)
	if (locale === "it") return it_upload_ready_detail(inputs)
	if (locale === "nl") return nl_upload_ready_detail(inputs)
	if (locale === "pl") return pl_upload_ready_detail(inputs)
	if (locale === "pt") return pt_upload_ready_detail(inputs)
	if (locale === "ru") return ru_upload_ready_detail(inputs)
	if (locale === "sv") return sv_upload_ready_detail(inputs)
	if (locale === "tr") return tr_upload_ready_detail(inputs)
	if (locale === "zh") return zh_upload_ready_detail(inputs)
	if (locale === "ja") return ja_upload_ready_detail(inputs)
	return en_upload_ready_detail(inputs)
});
