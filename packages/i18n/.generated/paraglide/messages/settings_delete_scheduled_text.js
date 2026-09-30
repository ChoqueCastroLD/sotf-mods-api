/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Delete_Scheduled_TextInputs */

const en_settings_delete_scheduled_text = /** @type {(inputs: Settings_Delete_Scheduled_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Changed your mind? Cancel now and everything stays as it is.`)
};

const es_settings_delete_scheduled_text = /** @type {(inputs: Settings_Delete_Scheduled_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Has cambiado de opinión? Cancélalo ahora y todo seguirá como está.`)
};

const de_settings_delete_scheduled_text = /** @type {(inputs: Settings_Delete_Scheduled_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Umentschieden? Brich jetzt ab und alles bleibt, wie es ist.`)
};

const fr_settings_delete_scheduled_text = /** @type {(inputs: Settings_Delete_Scheduled_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous avez changé d’avis ? Annulez maintenant et tout reste comme avant.`)
};

const it_settings_delete_scheduled_text = /** @type {(inputs: Settings_Delete_Scheduled_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hai cambiato idea? Annulla ora e tutto resta com’è.`)
};

const nl_settings_delete_scheduled_text = /** @type {(inputs: Settings_Delete_Scheduled_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toch bedacht? Annuleer nu en alles blijft zoals het is.`)
};

const pl_settings_delete_scheduled_text = /** @type {(inputs: Settings_Delete_Scheduled_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zmieniłeś zdanie? Anuluj teraz, a wszystko zostanie po staremu.`)
};

const pt_settings_delete_scheduled_text = /** @type {(inputs: Settings_Delete_Scheduled_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mudou de ideia? Cancele agora e tudo continua como está.`)
};

const ru_settings_delete_scheduled_text = /** @type {(inputs: Settings_Delete_Scheduled_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Передумали? Отмените сейчас, и всё останется как есть.`)
};

const sv_settings_delete_scheduled_text = /** @type {(inputs: Settings_Delete_Scheduled_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ångrat dig? Avbryt nu så blir allt som förut.`)
};

const tr_settings_delete_scheduled_text = /** @type {(inputs: Settings_Delete_Scheduled_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fikrini mi değiştirdin? Şimdi iptal et, her şey olduğu gibi kalsın.`)
};

const zh_settings_delete_scheduled_text = /** @type {(inputs: Settings_Delete_Scheduled_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`改变主意了？现在取消，一切保持原样。`)
};

const ja_settings_delete_scheduled_text = /** @type {(inputs: Settings_Delete_Scheduled_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`気が変わりましたか？今取り消せば、すべてそのままです。`)
};

/**
* | output |
* | --- |
* | "Changed your mind? Cancel now and everything stays as it is." |
*
* @param {Settings_Delete_Scheduled_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_delete_scheduled_text = /** @type {((inputs?: Settings_Delete_Scheduled_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Delete_Scheduled_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_delete_scheduled_text(inputs)
	if (locale === "de") return de_settings_delete_scheduled_text(inputs)
	if (locale === "fr") return fr_settings_delete_scheduled_text(inputs)
	if (locale === "it") return it_settings_delete_scheduled_text(inputs)
	if (locale === "nl") return nl_settings_delete_scheduled_text(inputs)
	if (locale === "pl") return pl_settings_delete_scheduled_text(inputs)
	if (locale === "pt") return pt_settings_delete_scheduled_text(inputs)
	if (locale === "ru") return ru_settings_delete_scheduled_text(inputs)
	if (locale === "sv") return sv_settings_delete_scheduled_text(inputs)
	if (locale === "tr") return tr_settings_delete_scheduled_text(inputs)
	if (locale === "zh") return zh_settings_delete_scheduled_text(inputs)
	if (locale === "ja") return ja_settings_delete_scheduled_text(inputs)
	return en_settings_delete_scheduled_text(inputs)
});
