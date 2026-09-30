/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Submit_IntroInputs */

const en_jams_submit_intro = /** @type {(inputs: Jams_Submit_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pick one of your published mods or builds. You can withdraw it until submissions close.`)
};

const es_jams_submit_intro = /** @type {(inputs: Jams_Submit_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige uno de tus mods o builds publicados. Puedes retirarlo hasta que cierren las inscripciones.`)
};

const de_jams_submit_intro = /** @type {(inputs: Jams_Submit_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wähle einen deiner veröffentlichten Mods oder Builds. Du kannst ihn bis zum Einreichungsschluss zurückziehen.`)
};

const fr_jams_submit_intro = /** @type {(inputs: Jams_Submit_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisissez l'un de vos mods ou builds publiés. Vous pouvez le retirer jusqu'à la clôture.`)
};

const it_jams_submit_intro = /** @type {(inputs: Jams_Submit_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli una delle tue mod o build pubblicate. Puoi ritirarla fino alla chiusura delle iscrizioni.`)
};

const nl_jams_submit_intro = /** @type {(inputs: Jams_Submit_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kies een van je gepubliceerde mods of builds. Je kunt hem intrekken tot de inzendingen sluiten.`)
};

const pl_jams_submit_intro = /** @type {(inputs: Jams_Submit_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz jeden ze swoich opublikowanych modów lub buildów. Możesz go wycofać do końca zgłoszeń.`)
};

const pt_jams_submit_intro = /** @type {(inputs: Jams_Submit_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha um dos seus mods ou builds publicados. Você pode retirá-lo até o fim das inscrições.`)
};

const ru_jams_submit_intro = /** @type {(inputs: Jams_Submit_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выберите один из ваших опубликованных модов или сборок. Работу можно отозвать до конца приёма.`)
};

const sv_jams_submit_intro = /** @type {(inputs: Jams_Submit_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj en av dina publicerade moddar eller builds. Du kan dra tillbaka det tills bidragen stänger.`)
};

const tr_jams_submit_intro = /** @type {(inputs: Jams_Submit_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yayımlanmış modlarınızdan veya build'lerinizden birini seçin. Başvurular kapanana kadar geri çekebilirsiniz.`)
};

const zh_jams_submit_intro = /** @type {(inputs: Jams_Submit_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择你已发布的模组或构建。投稿截止前可以撤回。`)
};

const ja_jams_submit_intro = /** @type {(inputs: Jams_Submit_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開済みの Mod またはビルドを選んでください。応募締め切りまで取り下げできます。`)
};

/**
* | output |
* | --- |
* | "Pick one of your published mods or builds. You can withdraw it until submissions close." |
*
* @param {Jams_Submit_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_submit_intro = /** @type {((inputs?: Jams_Submit_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Submit_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_submit_intro(inputs)
	if (locale === "de") return de_jams_submit_intro(inputs)
	if (locale === "fr") return fr_jams_submit_intro(inputs)
	if (locale === "it") return it_jams_submit_intro(inputs)
	if (locale === "nl") return nl_jams_submit_intro(inputs)
	if (locale === "pl") return pl_jams_submit_intro(inputs)
	if (locale === "pt") return pt_jams_submit_intro(inputs)
	if (locale === "ru") return ru_jams_submit_intro(inputs)
	if (locale === "sv") return sv_jams_submit_intro(inputs)
	if (locale === "tr") return tr_jams_submit_intro(inputs)
	if (locale === "zh") return zh_jams_submit_intro(inputs)
	if (locale === "ja") return ja_jams_submit_intro(inputs)
	return en_jams_submit_intro(inputs)
});
