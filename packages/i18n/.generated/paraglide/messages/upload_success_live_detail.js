/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Upload_Success_Live_DetailInputs */

const en_upload_success_live_detail = /** @type {(inputs: Upload_Success_Live_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} is published. Share it with the survivors.`)
};

const es_upload_success_live_detail = /** @type {(inputs: Upload_Success_Live_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} está publicado. Compártelo con los supervivientes.`)
};

const de_upload_success_live_detail = /** @type {(inputs: Upload_Success_Live_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ist veröffentlicht. Teile es mit den Überlebenden.`)
};

const fr_upload_success_live_detail = /** @type {(inputs: Upload_Success_Live_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} est publié. Partagez-le avec les survivants.`)
};

const it_upload_success_live_detail = /** @type {(inputs: Upload_Success_Live_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} è pubblicata. Condividila con i sopravvissuti.`)
};

const nl_upload_success_live_detail = /** @type {(inputs: Upload_Success_Live_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} is gepubliceerd. Deel het met de overlevenden.`)
};

const pl_upload_success_live_detail = /** @type {(inputs: Upload_Success_Live_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} jest już dostępny. Podziel się nim z ocalałymi.`)
};

const pt_upload_success_live_detail = /** @type {(inputs: Upload_Success_Live_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} foi publicado. Compartilhe com os sobreviventes.`)
};

const ru_upload_success_live_detail = /** @type {(inputs: Upload_Success_Live_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`«${i?.name}» опубликован. Поделитесь им с выжившими.`)
};

const sv_upload_success_live_detail = /** @type {(inputs: Upload_Success_Live_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} är publicerad. Dela den med överlevarna.`)
};

const tr_upload_success_live_detail = /** @type {(inputs: Upload_Success_Live_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} yayınlandı. Hayatta kalanlarla paylaş.`)
};

const zh_upload_success_live_detail = /** @type {(inputs: Upload_Success_Live_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 已发布。快分享给幸存者们吧。`)
};

const ja_upload_success_live_detail = /** @type {(inputs: Upload_Success_Live_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} を公開しました。サバイバーにシェアしましょう。`)
};

/**
* | output |
* | --- |
* | "{name} is published. Share it with the survivors." |
*
* @param {Upload_Success_Live_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_success_live_detail = /** @type {((inputs: Upload_Success_Live_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Success_Live_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_success_live_detail(inputs)
	if (locale === "de") return de_upload_success_live_detail(inputs)
	if (locale === "fr") return fr_upload_success_live_detail(inputs)
	if (locale === "it") return it_upload_success_live_detail(inputs)
	if (locale === "nl") return nl_upload_success_live_detail(inputs)
	if (locale === "pl") return pl_upload_success_live_detail(inputs)
	if (locale === "pt") return pt_upload_success_live_detail(inputs)
	if (locale === "ru") return ru_upload_success_live_detail(inputs)
	if (locale === "sv") return sv_upload_success_live_detail(inputs)
	if (locale === "tr") return tr_upload_success_live_detail(inputs)
	if (locale === "zh") return zh_upload_success_live_detail(inputs)
	if (locale === "ja") return ja_upload_success_live_detail(inputs)
	return en_upload_success_live_detail(inputs)
});
