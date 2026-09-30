/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Media_Cover_LegacyInputs */

const en_basecamp_media_cover_legacy = /** @type {(inputs: Basecamp_Media_Cover_LegacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This cover is still being moved to the new image storage; it can be replaced but not removed yet.`)
};

const es_basecamp_media_cover_legacy = /** @type {(inputs: Basecamp_Media_Cover_LegacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta portada aún se está trasladando al nuevo almacén de imágenes; se puede sustituir, pero todavía no quitar.`)
};

const de_basecamp_media_cover_legacy = /** @type {(inputs: Basecamp_Media_Cover_LegacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieses Titelbild wird noch in den neuen Bildspeicher verschoben; es kann ersetzt, aber noch nicht entfernt werden.`)
};

const fr_basecamp_media_cover_legacy = /** @type {(inputs: Basecamp_Media_Cover_LegacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cette couverture est encore en cours de transfert vers le nouveau stockage d’images ; elle peut être remplacée, mais pas encore retirée.`)
};

const it_basecamp_media_cover_legacy = /** @type {(inputs: Basecamp_Media_Cover_LegacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questa copertina è ancora in trasferimento al nuovo archivio immagini; si può sostituire ma non ancora rimuovere.`)
};

const nl_basecamp_media_cover_legacy = /** @type {(inputs: Basecamp_Media_Cover_LegacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze omslag wordt nog naar de nieuwe beeldopslag verplaatst; hij kan worden vervangen maar nog niet verwijderd.`)
};

const pl_basecamp_media_cover_legacy = /** @type {(inputs: Basecamp_Media_Cover_LegacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta okładka jest jeszcze przenoszona do nowego magazynu obrazów; można ją zastąpić, ale jeszcze nie usunąć.`)
};

const pt_basecamp_media_cover_legacy = /** @type {(inputs: Basecamp_Media_Cover_LegacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta capa ainda está sendo transferida para o novo armazenamento de imagens; pode ser substituída, mas ainda não removida.`)
};

const ru_basecamp_media_cover_legacy = /** @type {(inputs: Basecamp_Media_Cover_LegacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Эта обложка ещё переносится в новое хранилище изображений; её можно заменить, но пока нельзя убрать.`)
};

const sv_basecamp_media_cover_legacy = /** @type {(inputs: Basecamp_Media_Cover_LegacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det här omslaget flyttas fortfarande till den nya bildlagringen; det kan ersättas men ännu inte tas bort.`)
};

const tr_basecamp_media_cover_legacy = /** @type {(inputs: Basecamp_Media_Cover_LegacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu kapak hâlâ yeni görsel depolamasına taşınıyor; değiştirilebilir ama henüz kaldırılamaz.`)
};

const zh_basecamp_media_cover_legacy = /** @type {(inputs: Basecamp_Media_Cover_LegacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此封面仍在迁移到新的图片存储；可以替换，但暂时无法移除。`)
};

const ja_basecamp_media_cover_legacy = /** @type {(inputs: Basecamp_Media_Cover_LegacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このカバーは新しい画像ストレージへ移行中です。置き換えはできますが、まだ外せません。`)
};

/**
* | output |
* | --- |
* | "This cover is still being moved to the new image storage; it can be replaced but not removed yet." |
*
* @param {Basecamp_Media_Cover_LegacyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_media_cover_legacy = /** @type {((inputs?: Basecamp_Media_Cover_LegacyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Media_Cover_LegacyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_media_cover_legacy(inputs)
	if (locale === "de") return de_basecamp_media_cover_legacy(inputs)
	if (locale === "fr") return fr_basecamp_media_cover_legacy(inputs)
	if (locale === "it") return it_basecamp_media_cover_legacy(inputs)
	if (locale === "nl") return nl_basecamp_media_cover_legacy(inputs)
	if (locale === "pl") return pl_basecamp_media_cover_legacy(inputs)
	if (locale === "pt") return pt_basecamp_media_cover_legacy(inputs)
	if (locale === "ru") return ru_basecamp_media_cover_legacy(inputs)
	if (locale === "sv") return sv_basecamp_media_cover_legacy(inputs)
	if (locale === "tr") return tr_basecamp_media_cover_legacy(inputs)
	if (locale === "zh") return zh_basecamp_media_cover_legacy(inputs)
	if (locale === "ja") return ja_basecamp_media_cover_legacy(inputs)
	return en_basecamp_media_cover_legacy(inputs)
});
