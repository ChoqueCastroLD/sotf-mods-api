/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Upload_Gallery_AddedInputs */

const en_upload_gallery_added = /** @type {(inputs: Upload_Gallery_AddedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} image added`);
	return /** @type {LocalizedString} */ (`${count__number} images added`)
	
};

const es_upload_gallery_added = /** @type {(inputs: Upload_Gallery_AddedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} imagen añadida`);
	return /** @type {LocalizedString} */ (`${count__number} imágenes añadidas`)
	
};

const de_upload_gallery_added = /** @type {(inputs: Upload_Gallery_AddedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Bild hinzugefügt`);
	return /** @type {LocalizedString} */ (`${count__number} Bilder hinzugefügt`)
	
};

const fr_upload_gallery_added = /** @type {(inputs: Upload_Gallery_AddedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} image ajoutée`);
	return /** @type {LocalizedString} */ (`${count__number} images ajoutées`)
	
};

const it_upload_gallery_added = /** @type {(inputs: Upload_Gallery_AddedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} immagine aggiunta`);
	return /** @type {LocalizedString} */ (`${count__number} immagini aggiunte`)
	
};

const nl_upload_gallery_added = /** @type {(inputs: Upload_Gallery_AddedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} afbeelding toegevoegd`);
	return /** @type {LocalizedString} */ (`${count__number} afbeeldingen toegevoegd`)
	
};

const pl_upload_gallery_added = /** @type {(inputs: Upload_Gallery_AddedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Dodano ${count__number} obraz`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Dodano ${count__number} obrazy`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Dodano ${count__number} obrazów`);
	return /** @type {LocalizedString} */ (`Dodano ${count__number} obrazu`)
	
};

const pt_upload_gallery_added = /** @type {(inputs: Upload_Gallery_AddedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} imagem adicionada`);
	return /** @type {LocalizedString} */ (`${count__number} imagens adicionadas`)
	
};

const ru_upload_gallery_added = /** @type {(inputs: Upload_Gallery_AddedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Добавлено ${count__number} изображение`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Добавлено ${count__number} изображения`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Добавлено ${count__number} изображений`);
	return /** @type {LocalizedString} */ (`Добавлено ${count__number} изображения`)
	
};

const sv_upload_gallery_added = /** @type {(inputs: Upload_Gallery_AddedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} bild tillagd`);
	return /** @type {LocalizedString} */ (`${count__number} bilder tillagda`)
	
};

const tr_upload_gallery_added = /** @type {(inputs: Upload_Gallery_AddedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} görsel eklendi`);
	return /** @type {LocalizedString} */ (`${count__number} görsel eklendi`)
	
};

const zh_upload_gallery_added = /** @type {(inputs: Upload_Gallery_AddedInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`已添加 ${count__number} 张图片`)
};

const ja_upload_gallery_added = /** @type {(inputs: Upload_Gallery_AddedInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`画像を ${count__number} 枚追加しました`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} image added" |
* | * | "{count__number} images added" |
*
* @param {Upload_Gallery_AddedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_gallery_added = /** @type {((inputs: Upload_Gallery_AddedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Gallery_AddedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_gallery_added(inputs)
	if (locale === "de") return de_upload_gallery_added(inputs)
	if (locale === "fr") return fr_upload_gallery_added(inputs)
	if (locale === "it") return it_upload_gallery_added(inputs)
	if (locale === "nl") return nl_upload_gallery_added(inputs)
	if (locale === "pl") return pl_upload_gallery_added(inputs)
	if (locale === "pt") return pt_upload_gallery_added(inputs)
	if (locale === "ru") return ru_upload_gallery_added(inputs)
	if (locale === "sv") return sv_upload_gallery_added(inputs)
	if (locale === "tr") return tr_upload_gallery_added(inputs)
	if (locale === "zh") return zh_upload_gallery_added(inputs)
	if (locale === "ja") return ja_upload_gallery_added(inputs)
	return en_upload_gallery_added(inputs)
});
