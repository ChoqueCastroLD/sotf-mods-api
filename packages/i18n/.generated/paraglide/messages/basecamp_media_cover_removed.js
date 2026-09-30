/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Media_Cover_RemovedInputs */

const en_basecamp_media_cover_removed = /** @type {(inputs: Basecamp_Media_Cover_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The cover will be removed when you save.`)
};

const es_basecamp_media_cover_removed = /** @type {(inputs: Basecamp_Media_Cover_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La portada se quitará al guardar.`)
};

const de_basecamp_media_cover_removed = /** @type {(inputs: Basecamp_Media_Cover_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Titelbild wird beim Speichern entfernt.`)
};

const fr_basecamp_media_cover_removed = /** @type {(inputs: Basecamp_Media_Cover_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La couverture sera retirée à l’enregistrement.`)
};

const it_basecamp_media_cover_removed = /** @type {(inputs: Basecamp_Media_Cover_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La copertina verrà rimossa al salvataggio.`)
};

const nl_basecamp_media_cover_removed = /** @type {(inputs: Basecamp_Media_Cover_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De omslag wordt bij het opslaan verwijderd.`)
};

const pl_basecamp_media_cover_removed = /** @type {(inputs: Basecamp_Media_Cover_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Okładka zostanie usunięta przy zapisie.`)
};

const pt_basecamp_media_cover_removed = /** @type {(inputs: Basecamp_Media_Cover_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A capa será removida ao salvar.`)
};

const ru_basecamp_media_cover_removed = /** @type {(inputs: Basecamp_Media_Cover_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обложка будет убрана при сохранении.`)
};

const sv_basecamp_media_cover_removed = /** @type {(inputs: Basecamp_Media_Cover_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Omslaget tas bort när du sparar.`)
};

const tr_basecamp_media_cover_removed = /** @type {(inputs: Basecamp_Media_Cover_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapak kaydettiğinde kaldırılacak.`)
};

const zh_basecamp_media_cover_removed = /** @type {(inputs: Basecamp_Media_Cover_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存后将移除封面。`)
};

const ja_basecamp_media_cover_removed = /** @type {(inputs: Basecamp_Media_Cover_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存するとカバーが外れます。`)
};

/**
* | output |
* | --- |
* | "The cover will be removed when you save." |
*
* @param {Basecamp_Media_Cover_RemovedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_media_cover_removed = /** @type {((inputs?: Basecamp_Media_Cover_RemovedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Media_Cover_RemovedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_media_cover_removed(inputs)
	if (locale === "de") return de_basecamp_media_cover_removed(inputs)
	if (locale === "fr") return fr_basecamp_media_cover_removed(inputs)
	if (locale === "it") return it_basecamp_media_cover_removed(inputs)
	if (locale === "nl") return nl_basecamp_media_cover_removed(inputs)
	if (locale === "pl") return pl_basecamp_media_cover_removed(inputs)
	if (locale === "pt") return pt_basecamp_media_cover_removed(inputs)
	if (locale === "ru") return ru_basecamp_media_cover_removed(inputs)
	if (locale === "sv") return sv_basecamp_media_cover_removed(inputs)
	if (locale === "tr") return tr_basecamp_media_cover_removed(inputs)
	if (locale === "zh") return zh_basecamp_media_cover_removed(inputs)
	if (locale === "ja") return ja_basecamp_media_cover_removed(inputs)
	return en_basecamp_media_cover_removed(inputs)
});
