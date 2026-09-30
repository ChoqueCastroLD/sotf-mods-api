/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Media_LockedInputs */

const en_basecamp_media_locked = /** @type {(inputs: Basecamp_Media_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Being moved to the new storage: it keeps its place for now`)
};

const es_basecamp_media_locked = /** @type {(inputs: Basecamp_Media_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se está trasladando al nuevo almacén: de momento mantiene su sitio`)
};

const de_basecamp_media_locked = /** @type {(inputs: Basecamp_Media_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wird in den neuen Speicher verschoben: behält vorerst seinen Platz`)
};

const fr_basecamp_media_locked = /** @type {(inputs: Basecamp_Media_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En cours de transfert vers le nouveau stockage : garde sa place pour l’instant`)
};

const it_basecamp_media_locked = /** @type {(inputs: Basecamp_Media_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In trasferimento al nuovo archivio: per ora mantiene la sua posizione`)
};

const nl_basecamp_media_locked = /** @type {(inputs: Basecamp_Media_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wordt naar de nieuwe opslag verplaatst: houdt voorlopig zijn plek`)
};

const pl_basecamp_media_locked = /** @type {(inputs: Basecamp_Media_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przenoszony do nowego magazynu: na razie zostaje na swoim miejscu`)
};

const pt_basecamp_media_locked = /** @type {(inputs: Basecamp_Media_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sendo transferida para o novo armazenamento: mantém a posição por enquanto`)
};

const ru_basecamp_media_locked = /** @type {(inputs: Basecamp_Media_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Переносится в новое хранилище: пока остаётся на своём месте`)
};

const sv_basecamp_media_locked = /** @type {(inputs: Basecamp_Media_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flyttas till den nya lagringen: behåller sin plats så länge`)
};

const tr_basecamp_media_locked = /** @type {(inputs: Basecamp_Media_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni depolamaya taşınıyor: şimdilik yerinde kalıyor`)
};

const zh_basecamp_media_locked = /** @type {(inputs: Basecamp_Media_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在迁移到新存储：暂时保持原位`)
};

const ja_basecamp_media_locked = /** @type {(inputs: Basecamp_Media_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいストレージへ移行中：当面は位置が固定されます`)
};

/**
* | output |
* | --- |
* | "Being moved to the new storage: it keeps its place for now" |
*
* @param {Basecamp_Media_LockedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_media_locked = /** @type {((inputs?: Basecamp_Media_LockedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Media_LockedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_media_locked(inputs)
	if (locale === "de") return de_basecamp_media_locked(inputs)
	if (locale === "fr") return fr_basecamp_media_locked(inputs)
	if (locale === "it") return it_basecamp_media_locked(inputs)
	if (locale === "nl") return nl_basecamp_media_locked(inputs)
	if (locale === "pl") return pl_basecamp_media_locked(inputs)
	if (locale === "pt") return pt_basecamp_media_locked(inputs)
	if (locale === "ru") return ru_basecamp_media_locked(inputs)
	if (locale === "sv") return sv_basecamp_media_locked(inputs)
	if (locale === "tr") return tr_basecamp_media_locked(inputs)
	if (locale === "zh") return zh_basecamp_media_locked(inputs)
	if (locale === "ja") return ja_basecamp_media_locked(inputs)
	return en_basecamp_media_locked(inputs)
});
