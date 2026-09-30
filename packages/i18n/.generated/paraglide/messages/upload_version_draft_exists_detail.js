/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Version_Draft_Exists_DetailInputs */

const en_upload_version_draft_exists_detail = /** @type {(inputs: Upload_Version_Draft_Exists_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resume that draft, or continue here to start over.`)
};

const es_upload_version_draft_exists_detail = /** @type {(inputs: Upload_Version_Draft_Exists_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retoma ese borrador o continúa aquí para empezar de cero.`)
};

const de_upload_version_draft_exists_detail = /** @type {(inputs: Upload_Version_Draft_Exists_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Setze diesen Entwurf fort oder mach hier weiter, um neu anzufangen.`)
};

const fr_upload_version_draft_exists_detail = /** @type {(inputs: Upload_Version_Draft_Exists_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reprenez ce brouillon ou continuez ici pour repartir de zéro.`)
};

const it_upload_version_draft_exists_detail = /** @type {(inputs: Upload_Version_Draft_Exists_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Riprendi quella bozza o continua qui per ricominciare.`)
};

const nl_upload_version_draft_exists_detail = /** @type {(inputs: Upload_Version_Draft_Exists_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ga verder met dat concept, of ga hier verder om opnieuw te beginnen.`)
};

const pl_upload_version_draft_exists_detail = /** @type {(inputs: Upload_Version_Draft_Exists_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wróć do tamtego szkicu albo kontynuuj tutaj, aby zacząć od nowa.`)
};

const pt_upload_version_draft_exists_detail = /** @type {(inputs: Upload_Version_Draft_Exists_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retome esse rascunho ou continue aqui para recomeçar.`)
};

const ru_upload_version_draft_exists_detail = /** @type {(inputs: Upload_Version_Draft_Exists_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вернитесь к тому черновику или продолжайте здесь, чтобы начать заново.`)
};

const sv_upload_version_draft_exists_detail = /** @type {(inputs: Upload_Version_Draft_Exists_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fortsätt med det utkastet, eller fortsätt här för att börja om.`)
};

const tr_upload_version_draft_exists_detail = /** @type {(inputs: Upload_Version_Draft_Exists_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O taslağa devam et ya da baştan başlamak için burada sürdür.`)
};

const zh_upload_version_draft_exists_detail = /** @type {(inputs: Upload_Version_Draft_Exists_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`继续那个草稿，或在这里重新开始。`)
};

const ja_upload_version_draft_exists_detail = /** @type {(inputs: Upload_Version_Draft_Exists_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`その下書きを再開するか、ここで最初からやり直してください。`)
};

/**
* | output |
* | --- |
* | "Resume that draft, or continue here to start over." |
*
* @param {Upload_Version_Draft_Exists_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_version_draft_exists_detail = /** @type {((inputs?: Upload_Version_Draft_Exists_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Version_Draft_Exists_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_version_draft_exists_detail(inputs)
	if (locale === "de") return de_upload_version_draft_exists_detail(inputs)
	if (locale === "fr") return fr_upload_version_draft_exists_detail(inputs)
	if (locale === "it") return it_upload_version_draft_exists_detail(inputs)
	if (locale === "nl") return nl_upload_version_draft_exists_detail(inputs)
	if (locale === "pl") return pl_upload_version_draft_exists_detail(inputs)
	if (locale === "pt") return pt_upload_version_draft_exists_detail(inputs)
	if (locale === "ru") return ru_upload_version_draft_exists_detail(inputs)
	if (locale === "sv") return sv_upload_version_draft_exists_detail(inputs)
	if (locale === "tr") return tr_upload_version_draft_exists_detail(inputs)
	if (locale === "zh") return zh_upload_version_draft_exists_detail(inputs)
	if (locale === "ja") return ja_upload_version_draft_exists_detail(inputs)
	return en_upload_version_draft_exists_detail(inputs)
});
