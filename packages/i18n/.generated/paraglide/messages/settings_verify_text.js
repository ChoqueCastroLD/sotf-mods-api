/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Verify_TextInputs */

const en_settings_verify_text = /** @type {(inputs: Settings_Verify_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Until you do, you can browse and download but not comment, review or publish.`)
};

const es_settings_verify_text = /** @type {(inputs: Settings_Verify_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hasta entonces puedes explorar y descargar, pero no comentar, reseñar ni publicar.`)
};

const de_settings_verify_text = /** @type {(inputs: Settings_Verify_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bis dahin kannst du stöbern und herunterladen, aber nicht kommentieren, bewerten oder veröffentlichen.`)
};

const fr_settings_verify_text = /** @type {(inputs: Settings_Verify_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En attendant, vous pouvez parcourir et télécharger, mais pas commenter, donner un avis ni publier.`)
};

const it_settings_verify_text = /** @type {(inputs: Settings_Verify_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fino ad allora puoi esplorare e scaricare, ma non commentare, recensire o pubblicare.`)
};

const nl_settings_verify_text = /** @type {(inputs: Settings_Verify_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tot die tijd kun je rondkijken en downloaden, maar niet reageren, reviewen of publiceren.`)
};

const pl_settings_verify_text = /** @type {(inputs: Settings_Verify_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Do tego czasu możesz przeglądać i pobierać, ale nie komentować, recenzować ani publikować.`)
};

const pt_settings_verify_text = /** @type {(inputs: Settings_Verify_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Até lá você pode explorar e baixar, mas não comentar, avaliar nem publicar.`)
};

const ru_settings_verify_text = /** @type {(inputs: Settings_Verify_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`До этого можно смотреть и скачивать, но нельзя комментировать, писать отзывы и публиковать.`)
};

const sv_settings_verify_text = /** @type {(inputs: Settings_Verify_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fram till dess kan du bläddra och ladda ned, men inte kommentera, recensera eller publicera.`)
};

const tr_settings_verify_text = /** @type {(inputs: Settings_Verify_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O zamana kadar göz atıp indirebilirsin ama yorum yapamaz, inceleme yazamaz veya yayımlayamazsın.`)
};

const zh_settings_verify_text = /** @type {(inputs: Settings_Verify_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在此之前你可以浏览和下载，但不能评论、评价或发布。`)
};

const ja_settings_verify_text = /** @type {(inputs: Settings_Verify_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`確認するまでは閲覧とダウンロードはできますが、コメント、レビュー、公開はできません。`)
};

/**
* | output |
* | --- |
* | "Until you do, you can browse and download but not comment, review or publish." |
*
* @param {Settings_Verify_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_verify_text = /** @type {((inputs?: Settings_Verify_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Verify_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_verify_text(inputs)
	if (locale === "de") return de_settings_verify_text(inputs)
	if (locale === "fr") return fr_settings_verify_text(inputs)
	if (locale === "it") return it_settings_verify_text(inputs)
	if (locale === "nl") return nl_settings_verify_text(inputs)
	if (locale === "pl") return pl_settings_verify_text(inputs)
	if (locale === "pt") return pt_settings_verify_text(inputs)
	if (locale === "ru") return ru_settings_verify_text(inputs)
	if (locale === "sv") return sv_settings_verify_text(inputs)
	if (locale === "tr") return tr_settings_verify_text(inputs)
	if (locale === "zh") return zh_settings_verify_text(inputs)
	if (locale === "ja") return ja_settings_verify_text(inputs)
	return en_settings_verify_text(inputs)
});
