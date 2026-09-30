/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Media_Cover_CurrentInputs */

const en_basecamp_media_cover_current = /** @type {(inputs: Basecamp_Media_Cover_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Current cover. Choose a new image below to replace it.`)
};

const es_basecamp_media_cover_current = /** @type {(inputs: Basecamp_Media_Cover_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Portada actual. Elige una imagen nueva abajo para sustituirla.`)
};

const de_basecamp_media_cover_current = /** @type {(inputs: Basecamp_Media_Cover_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktuelles Titelbild. Wähle unten ein neues Bild, um es zu ersetzen.`)
};

const fr_basecamp_media_cover_current = /** @type {(inputs: Basecamp_Media_Cover_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couverture actuelle. Choisis une nouvelle image ci-dessous pour la remplacer.`)
};

const it_basecamp_media_cover_current = /** @type {(inputs: Basecamp_Media_Cover_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copertina attuale. Scegli una nuova immagine qui sotto per sostituirla.`)
};

const nl_basecamp_media_cover_current = /** @type {(inputs: Basecamp_Media_Cover_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Huidige omslag. Kies hieronder een nieuwe afbeelding om hem te vervangen.`)
};

const pl_basecamp_media_cover_current = /** @type {(inputs: Basecamp_Media_Cover_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obecna okładka. Wybierz poniżej nowy obraz, aby ją zastąpić.`)
};

const pt_basecamp_media_cover_current = /** @type {(inputs: Basecamp_Media_Cover_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Capa atual. Escolha uma nova imagem abaixo para substituí-la.`)
};

const ru_basecamp_media_cover_current = /** @type {(inputs: Basecamp_Media_Cover_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Текущая обложка. Выберите ниже новое изображение, чтобы заменить её.`)
};

const sv_basecamp_media_cover_current = /** @type {(inputs: Basecamp_Media_Cover_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuvarande omslag. Välj en ny bild nedan för att ersätta det.`)
};

const tr_basecamp_media_cover_current = /** @type {(inputs: Basecamp_Media_Cover_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mevcut kapak. Değiştirmek için aşağıdan yeni bir görsel seç.`)
};

const zh_basecamp_media_cover_current = /** @type {(inputs: Basecamp_Media_Cover_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`当前封面。在下方选择新图片即可替换。`)
};

const ja_basecamp_media_cover_current = /** @type {(inputs: Basecamp_Media_Cover_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現在のカバー。下で新しい画像を選ぶと置き換えられます。`)
};

/**
* | output |
* | --- |
* | "Current cover. Choose a new image below to replace it." |
*
* @param {Basecamp_Media_Cover_CurrentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_media_cover_current = /** @type {((inputs?: Basecamp_Media_Cover_CurrentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Media_Cover_CurrentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_media_cover_current(inputs)
	if (locale === "de") return de_basecamp_media_cover_current(inputs)
	if (locale === "fr") return fr_basecamp_media_cover_current(inputs)
	if (locale === "it") return it_basecamp_media_cover_current(inputs)
	if (locale === "nl") return nl_basecamp_media_cover_current(inputs)
	if (locale === "pl") return pl_basecamp_media_cover_current(inputs)
	if (locale === "pt") return pt_basecamp_media_cover_current(inputs)
	if (locale === "ru") return ru_basecamp_media_cover_current(inputs)
	if (locale === "sv") return sv_basecamp_media_cover_current(inputs)
	if (locale === "tr") return tr_basecamp_media_cover_current(inputs)
	if (locale === "zh") return zh_basecamp_media_cover_current(inputs)
	if (locale === "ja") return ja_basecamp_media_cover_current(inputs)
	return en_basecamp_media_cover_current(inputs)
});
