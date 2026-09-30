/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Media_Failed_HintInputs */

const en_basecamp_media_failed_hint = /** @type {(inputs: Basecamp_Media_Failed_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove the images that failed or choose them again.`)
};

const es_basecamp_media_failed_hint = /** @type {(inputs: Basecamp_Media_Failed_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quita las imágenes que fallaron o vuelve a elegirlas.`)
};

const de_basecamp_media_failed_hint = /** @type {(inputs: Basecamp_Media_Failed_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entferne die fehlgeschlagenen Bilder oder wähle sie erneut.`)
};

const fr_basecamp_media_failed_hint = /** @type {(inputs: Basecamp_Media_Failed_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirez les images en échec ou choisissez-les à nouveau.`)
};

const it_basecamp_media_failed_hint = /** @type {(inputs: Basecamp_Media_Failed_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rimuovi le immagini non riuscite o sceglile di nuovo.`)
};

const nl_basecamp_media_failed_hint = /** @type {(inputs: Basecamp_Media_Failed_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwijder de mislukte afbeeldingen of kies ze opnieuw.`)
};

const pl_basecamp_media_failed_hint = /** @type {(inputs: Basecamp_Media_Failed_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuń obrazy, których nie udało się wysłać, albo wybierz je ponownie.`)
};

const pt_basecamp_media_failed_hint = /** @type {(inputs: Basecamp_Media_Failed_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remova as imagens que falharam ou escolha-as de novo.`)
};

const ru_basecamp_media_failed_hint = /** @type {(inputs: Basecamp_Media_Failed_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалите изображения с ошибкой или выберите их снова.`)
};

const sv_basecamp_media_failed_hint = /** @type {(inputs: Basecamp_Media_Failed_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta bort bilderna som misslyckades eller välj dem igen.`)
};

const tr_basecamp_media_failed_hint = /** @type {(inputs: Basecamp_Media_Failed_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başarısız olan görselleri kaldır ya da yeniden seç.`)
};

const zh_basecamp_media_failed_hint = /** @type {(inputs: Basecamp_Media_Failed_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移除上传失败的图片，或重新选择。`)
};

const ja_basecamp_media_failed_hint = /** @type {(inputs: Basecamp_Media_Failed_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`失敗した画像を削除するか、選び直してください。`)
};

/**
* | output |
* | --- |
* | "Remove the images that failed or choose them again." |
*
* @param {Basecamp_Media_Failed_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_media_failed_hint = /** @type {((inputs?: Basecamp_Media_Failed_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Media_Failed_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_media_failed_hint(inputs)
	if (locale === "de") return de_basecamp_media_failed_hint(inputs)
	if (locale === "fr") return fr_basecamp_media_failed_hint(inputs)
	if (locale === "it") return it_basecamp_media_failed_hint(inputs)
	if (locale === "nl") return nl_basecamp_media_failed_hint(inputs)
	if (locale === "pl") return pl_basecamp_media_failed_hint(inputs)
	if (locale === "pt") return pt_basecamp_media_failed_hint(inputs)
	if (locale === "ru") return ru_basecamp_media_failed_hint(inputs)
	if (locale === "sv") return sv_basecamp_media_failed_hint(inputs)
	if (locale === "tr") return tr_basecamp_media_failed_hint(inputs)
	if (locale === "zh") return zh_basecamp_media_failed_hint(inputs)
	if (locale === "ja") return ja_basecamp_media_failed_hint(inputs)
	return en_basecamp_media_failed_hint(inputs)
});
