/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Build_No_ThumbnailInputs */

const en_upload_build_no_thumbnail = /** @type {(inputs: Upload_Build_No_ThumbnailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This blueprint has no thumbnail. Add a cover in the media step.`)
};

const es_upload_build_no_thumbnail = /** @type {(inputs: Upload_Build_No_ThumbnailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este plano no tiene miniatura. Añade una portada en el paso de medios.`)
};

const de_upload_build_no_thumbnail = /** @type {(inputs: Upload_Build_No_ThumbnailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Bauplan hat kein Vorschaubild. Füge im Medien-Schritt ein Titelbild hinzu.`)
};

const fr_upload_build_no_thumbnail = /** @type {(inputs: Upload_Build_No_ThumbnailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce plan n’a pas de miniature. Ajoutez une couverture à l’étape des médias.`)
};

const it_upload_build_no_thumbnail = /** @type {(inputs: Upload_Build_No_ThumbnailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questo progetto non ha una miniatura. Aggiungi una copertina nel passaggio dei media.`)
};

const nl_upload_build_no_thumbnail = /** @type {(inputs: Upload_Build_No_ThumbnailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze bouwtekening heeft geen miniatuur. Voeg een omslag toe bij de mediastap.`)
};

const pl_upload_build_no_thumbnail = /** @type {(inputs: Upload_Build_No_ThumbnailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten plan nie ma miniatury. Dodaj okładkę w kroku multimediów.`)
};

const pt_upload_build_no_thumbnail = /** @type {(inputs: Upload_Build_No_ThumbnailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta planta não tem miniatura. Adicione uma capa na etapa de mídia.`)
};

const ru_upload_build_no_thumbnail = /** @type {(inputs: Upload_Build_No_ThumbnailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`У этого чертежа нет миниатюры. Добавьте обложку на шаге медиа.`)
};

const sv_upload_build_no_thumbnail = /** @type {(inputs: Upload_Build_No_ThumbnailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här ritningen har ingen miniatyr. Lägg till ett omslag i mediesteget.`)
};

const tr_upload_build_no_thumbnail = /** @type {(inputs: Upload_Build_No_ThumbnailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu planın küçük resmi yok. Medya adımında bir kapak ekle.`)
};

const zh_upload_build_no_thumbnail = /** @type {(inputs: Upload_Build_No_ThumbnailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这个蓝图没有缩略图。请在媒体步骤添加封面。`)
};

const ja_upload_build_no_thumbnail = /** @type {(inputs: Upload_Build_No_ThumbnailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この設計図にはサムネイルがありません。メディアの手順でカバーを追加してください。`)
};

/**
* | output |
* | --- |
* | "This blueprint has no thumbnail. Add a cover in the media step." |
*
* @param {Upload_Build_No_ThumbnailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_build_no_thumbnail = /** @type {((inputs?: Upload_Build_No_ThumbnailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Build_No_ThumbnailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_build_no_thumbnail(inputs)
	if (locale === "de") return de_upload_build_no_thumbnail(inputs)
	if (locale === "fr") return fr_upload_build_no_thumbnail(inputs)
	if (locale === "it") return it_upload_build_no_thumbnail(inputs)
	if (locale === "nl") return nl_upload_build_no_thumbnail(inputs)
	if (locale === "pl") return pl_upload_build_no_thumbnail(inputs)
	if (locale === "pt") return pt_upload_build_no_thumbnail(inputs)
	if (locale === "ru") return ru_upload_build_no_thumbnail(inputs)
	if (locale === "sv") return sv_upload_build_no_thumbnail(inputs)
	if (locale === "tr") return tr_upload_build_no_thumbnail(inputs)
	if (locale === "zh") return zh_upload_build_no_thumbnail(inputs)
	if (locale === "ja") return ja_upload_build_no_thumbnail(inputs)
	return en_upload_build_no_thumbnail(inputs)
});
