/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Flagged_DetailInputs */

const en_upload_flagged_detail = /** @type {(inputs: Upload_Flagged_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Something in it needs a human check (see the warnings below). You can still submit; it goes live once approved.`)
};

const es_upload_flagged_detail = /** @type {(inputs: Upload_Flagged_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hay algo que requiere una revisión humana (mira los avisos de abajo). Puedes enviarlo igualmente; se publicará cuando se apruebe.`)
};

const de_upload_flagged_detail = /** @type {(inputs: Upload_Flagged_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etwas darin braucht eine menschliche Prüfung (siehe Warnungen unten). Du kannst trotzdem einreichen; online geht es nach der Freigabe.`)
};

const fr_upload_flagged_detail = /** @type {(inputs: Upload_Flagged_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un élément demande une vérification humaine (voir les avertissements ci-dessous). Vous pouvez quand même l’envoyer ; il sera publié après approbation.`)
};

const it_upload_flagged_detail = /** @type {(inputs: Upload_Flagged_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualcosa richiede un controllo umano (vedi gli avvisi sotto). Puoi inviarlo comunque; sarà pubblicato dopo l’approvazione.`)
};

const nl_upload_flagged_detail = /** @type {(inputs: Upload_Flagged_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iets erin vraagt een menselijke controle (zie de waarschuwingen hieronder). Je kunt toch indienen; het gaat live na goedkeuring.`)
};

const pl_upload_flagged_detail = /** @type {(inputs: Upload_Flagged_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coś w nim wymaga sprawdzenia przez człowieka (zobacz ostrzeżenia poniżej). Nadal możesz go wysłać; zostanie opublikowany po zatwierdzeniu.`)
};

const pt_upload_flagged_detail = /** @type {(inputs: Upload_Flagged_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Algo nele precisa de uma verificação humana (veja os avisos abaixo). Você ainda pode enviar; ele será publicado após a aprovação.`)
};

const ru_upload_flagged_detail = /** @type {(inputs: Upload_Flagged_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Что-то в нём требует проверки человеком (см. предупреждения ниже). Отправить всё равно можно: он будет опубликован после одобрения.`)
};

const sv_upload_flagged_detail = /** @type {(inputs: Upload_Flagged_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Något i den behöver granskas av en människa (se varningarna nedan). Du kan ändå skicka in; den publiceras när den godkänts.`)
};

const tr_upload_flagged_detail = /** @type {(inputs: Upload_Flagged_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İçindeki bir şey insan kontrolü gerektiriyor (aşağıdaki uyarılara bak). Yine de gönderebilirsin; onaylanınca yayına girer.`)
};

const zh_upload_flagged_detail = /** @type {(inputs: Upload_Flagged_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`其中有内容需要人工检查（见下方警告）。你仍可提交，批准后即会发布。`)
};

const ja_upload_flagged_detail = /** @type {(inputs: Upload_Flagged_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`人による確認が必要な内容があります（下の警告を参照）。このまま送信でき、承認されると公開されます。`)
};

/**
* | output |
* | --- |
* | "Something in it needs a human check (see the warnings below). You can still submit; it goes live once approved." |
*
* @param {Upload_Flagged_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_flagged_detail = /** @type {((inputs?: Upload_Flagged_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Flagged_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_flagged_detail(inputs)
	if (locale === "de") return de_upload_flagged_detail(inputs)
	if (locale === "fr") return fr_upload_flagged_detail(inputs)
	if (locale === "it") return it_upload_flagged_detail(inputs)
	if (locale === "nl") return nl_upload_flagged_detail(inputs)
	if (locale === "pl") return pl_upload_flagged_detail(inputs)
	if (locale === "pt") return pt_upload_flagged_detail(inputs)
	if (locale === "ru") return ru_upload_flagged_detail(inputs)
	if (locale === "sv") return sv_upload_flagged_detail(inputs)
	if (locale === "tr") return tr_upload_flagged_detail(inputs)
	if (locale === "zh") return zh_upload_flagged_detail(inputs)
	if (locale === "ja") return ja_upload_flagged_detail(inputs)
	return en_upload_flagged_detail(inputs)
});
