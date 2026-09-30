/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Entries_Confirm_TextInputs */

const en_jams_entries_confirm_text = /** @type {(inputs: Jams_Entries_Confirm_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The entry leaves the gallery and its votes stop counting. You can restore it later.`)
};

const es_jams_entries_confirm_text = /** @type {(inputs: Jams_Entries_Confirm_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La participación sale de la galería y sus votos dejan de contar. Puedes restaurarla después.`)
};

const de_jams_entries_confirm_text = /** @type {(inputs: Jams_Entries_Confirm_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Beitrag verschwindet aus der Galerie und seine Stimmen zählen nicht mehr. Du kannst ihn später wiederherstellen.`)
};

const fr_jams_entries_confirm_text = /** @type {(inputs: Jams_Entries_Confirm_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La participation quitte la galerie et ses votes ne comptent plus. Vous pourrez la rétablir plus tard.`)
};

const it_jams_entries_confirm_text = /** @type {(inputs: Jams_Entries_Confirm_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L'iscrizione lascia la galleria e i suoi voti non contano più. Potrai ripristinarla in seguito.`)
};

const nl_jams_entries_confirm_text = /** @type {(inputs: Jams_Entries_Confirm_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De inzending verdwijnt uit de galerij en de stemmen tellen niet meer mee. Je kunt haar later herstellen.`)
};

const pl_jams_entries_confirm_text = /** @type {(inputs: Jams_Entries_Confirm_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoszenie znika z galerii, a jego głosy przestają się liczyć. Możesz je później przywrócić.`)
};

const pt_jams_entries_confirm_text = /** @type {(inputs: Jams_Entries_Confirm_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A inscrição sai da galeria e seus votos deixam de contar. Você pode restaurá-la depois.`)
};

const ru_jams_entries_confirm_text = /** @type {(inputs: Jams_Entries_Confirm_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Работа исчезнет из галереи, а её голоса перестанут учитываться. Позже её можно восстановить.`)
};

const sv_jams_entries_confirm_text = /** @type {(inputs: Jams_Entries_Confirm_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bidraget försvinner från galleriet och dess röster räknas inte längre. Du kan återställa det senare.`)
};

const tr_jams_entries_confirm_text = /** @type {(inputs: Jams_Entries_Confirm_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başvuru galeriden kalkar ve oyları sayılmaz. Daha sonra geri yükleyebilirsiniz.`)
};

const zh_jams_entries_confirm_text = /** @type {(inputs: Jams_Entries_Confirm_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`该作品将从展示区移除，其投票不再计入。之后可以恢复。`)
};

const ja_jams_entries_confirm_text = /** @type {(inputs: Jams_Entries_Confirm_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作品はギャラリーから外れ、票は集計されなくなります。後で元に戻せます。`)
};

/**
* | output |
* | --- |
* | "The entry leaves the gallery and its votes stop counting. You can restore it later." |
*
* @param {Jams_Entries_Confirm_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_entries_confirm_text = /** @type {((inputs?: Jams_Entries_Confirm_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Entries_Confirm_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_entries_confirm_text(inputs)
	if (locale === "de") return de_jams_entries_confirm_text(inputs)
	if (locale === "fr") return fr_jams_entries_confirm_text(inputs)
	if (locale === "it") return it_jams_entries_confirm_text(inputs)
	if (locale === "nl") return nl_jams_entries_confirm_text(inputs)
	if (locale === "pl") return pl_jams_entries_confirm_text(inputs)
	if (locale === "pt") return pt_jams_entries_confirm_text(inputs)
	if (locale === "ru") return ru_jams_entries_confirm_text(inputs)
	if (locale === "sv") return sv_jams_entries_confirm_text(inputs)
	if (locale === "tr") return tr_jams_entries_confirm_text(inputs)
	if (locale === "zh") return zh_jams_entries_confirm_text(inputs)
	if (locale === "ja") return ja_jams_entries_confirm_text(inputs)
	return en_jams_entries_confirm_text(inputs)
});
